import { connect } from 'react-redux';
import MainLayout from '../components/MainLayout.jsx';

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
       
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainLayout)