import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {WrappedLoginForm} from '../components/Login.jsx';
import * as allActions from "../actions/loginAction.jsx"

// 容器组件代码
const mapStateToProps = (state, ownProps) => {
    return {
     
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
  )(WrappedLoginForm)