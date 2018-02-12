import { mapStateToProps, mapDispatchToProps } from '../CreateContainer.jsx';

describe('(Container) ContactSetting', () => {
  it('snapshots mapStateToProps', () => {
    // XXX: Get state from real or mock store, the main point is to snapshot the result after processed
    const state = {
        create:{
            createData:{
                size:"",
                sealingstatus:"",
                productname:"",
                country:"",
                countryCode:""
            }
        }
    };
    const ownProps = {
      // XXX: Add extra props (if any) for this component
    };
    expect(mapStateToProps(state, ownProps)).toMatchSnapshot();
  });

  it('snapshots mapDispatchToProps', () => {
    const dispatch = () => {};
    expect(mapDispatchToProps(dispatch)).toMatchSnapshot();
  });
});
