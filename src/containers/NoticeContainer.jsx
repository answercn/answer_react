import { connect } from 'react-redux';
import Notices from '../components/Notice.jsx';

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
       
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notices)