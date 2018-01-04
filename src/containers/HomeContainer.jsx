import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeComponents from '../components/Home.jsx';
import * as allActions from "../actions/homeAction.jsx"

// 容器组件代码
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
  )(HomeComponents)