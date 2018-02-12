import { connect } from 'react-redux';
import Notices from '../components/Notice.jsx';
import * as user from '../util/User.jsx';
import { bindActionCreators } from 'redux';
import * as allActions from "../actions/loginAction.jsx"
// 容器组件代码
const mapStateToProps = (state, ownProps) => {
    return {
        userData:state.user.userData,
        noticeData:state.notice.data
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        actions:bindActionCreators(allActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notices)