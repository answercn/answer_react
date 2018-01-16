import React from 'react';
import ReactDOM from 'react-dom';
import EditableTable from '../containers/hometableContainers/EditableTableContainer.jsx'
import AdvancedSearchForm from '../containers/hometableContainers/AdvancedSearchFormContainer.jsx'
// 展示组件
export default function Home(props){
          return(
            <div>
              <AdvancedSearchForm {...props}/>
              <EditableTable {...props}/>
            </div>
          )
}
