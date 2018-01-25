import { connect } from 'react-redux';
import MainLayout from '../components/MainLayout.jsx';
import * as allActions from "../actions/mainLayoutAction.jsx";
import { bindActionCreators } from 'redux';
// 容器组件代码
const mapStateToProps = (state, ownProps) => {
    return {
        router:state.router
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
  )(MainLayout)