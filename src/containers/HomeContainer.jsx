import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponents from '../components/Home.jsx';
import * as allActions from "../actions/homeAction.jsx"

// 容器组件代码
class Home extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        isEdit:false
      }
    }
    componentDidMount(){
        if(this.props.tableDataSource.dataSource.length>0){
          this.setState({
            isEdit:true
          })
        }
        let promiseInit = new Promise((resolve,reject)=>{
          this.props.actions.initHomeData(()=>{
            resolve()
          });
        });
        Promise.all([promiseInit]).then((value)=>{
          // success
          this.setState({
            isEdit:true
          })
        }, function(error) {
          // failure
        })
      }
      componentWillUnmount(){
      }
      render(){
          return(
            <div>
              <HomeComponents isEdit={this.state.isEdit} {...this.props}/>
            </div>
          )
      }
}

//关联redux
const mapStateToProps = (state, ownProps) => {
   console.log(state)
    return {
      tableDataSource:state.home.tableDataSource,
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