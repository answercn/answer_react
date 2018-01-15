import React from 'react';
import ReactDOM from 'react-dom';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { Tag } from 'antd';

/**
 * 通知组件
 */
export default class Notice extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("this notice",this.props)
    }
    onItemClick(item, tabProps) {
        console.log(item, tabProps);
    }
      
    onClear(tabTitle) {
        console.log(tabTitle);
    }
    handleLoginOut(){
      let { actions,history,location,userData } = this.props;
      debugger
      actions.loginOut(userData,history,location)
    }
    getNoticeData(notices) {
        if (notices.length === 0) {
            return {};
        }
        const newNotices = notices.map((notice) => {
            const newNotice = { ...notice };
            if (newNotice.datetime) {
              newNotice.datetime = moment(notice.datetime).fromNow();
            }
            // transform id to item key
            if (newNotice.id) {
              newNotice.key = newNotice.id;
            }
            if (newNotice.extra && newNotice.status) {
              const color = ({
                  todo: '',
                  processing: 'blue',
                  urgent: 'red',
                  doing: 'gold',
              })[newNotice.status];
              newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
            }
            return newNotice;
        });
        return groupBy(newNotices, 'type');
    }
    render(){
        const noticeDatas = this.props.noticeData; 
        const noticeData = this.getNoticeData(noticeDatas);
        console.log("notice",noticeData)
        return (
            <div
              style={{
                textAlign: 'right',
                height: '64px',
                lineHeight: '64px',
                padding: '0 32px',
                width: '400px',
              }}
            >
              <div style={{display:"inline-block",padding:"0 10px"}}>
                  <span>{this.props.userData.name}</span>
              </div>
              <div style={{display:"inline-block",padding:"0 10px"}}>
                  <span onClick={this.handleLoginOut.bind(this)} style={{cursor:"pointer"}}>login out</span>
              </div>
              <NoticeIcon
                className="notice-icon"
                count={noticeDatas.length}
                onItemClick={this.onItemClick.bind(this)}
                onClear={this.onClear.bind(this)}
                popupAlign={{ offset: [20, -16] }}
              >
                <NoticeIcon.Tab
                  list={noticeData['通知']}
                  title="通知"
                  emptyText="你已查看所有通知"
                  emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                />
                <NoticeIcon.Tab
                  list={noticeData['消息']}
                  title="消息"
                  emptyText="您已读完所有消息"
                  emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
                />
                <NoticeIcon.Tab
                  list={noticeData['待办']}
                  title="待办"
                  emptyText="你已完成所有待办"
                  emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
                />
              </NoticeIcon>
            </div>
            )
    }
}


 

