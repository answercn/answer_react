import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeComponents from '../components/Home.jsx';
import * as allActions from "../actions/homeAction.jsx"

// 容器组件代码
class Home extends React.Component{
    componentDidMount(){
        let promiseInit = new Promise((resolve,reject)=>{
          this.props.actions.initHomeData(()=>{
            resolve()
          });
        });
        Promise.all([promiseInit]).then((value)=>{
          // success
          this.isEdit = true
         
        }, function(error) {
          // failure
        })
      }
      render(){
          return(
              <HomeComponents {...this.props}/>
          )
      }
}

//关联redux
const mapStateToProps = (state, ownProps) => {
   
    return {
      isFinish:state.home.isFinish,
      createData: state.create.createData
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
      actions:bindActionCreators(allActions,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)