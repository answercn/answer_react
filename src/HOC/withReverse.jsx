import React from 'react';

export const withReverse = (WarpComponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            console.log("aaa",this.props)
        }
        render(){
           
            let {children,...props} = this.props;
            let newText = children?children.split("").reverse().join(""):"";
            return (
                <WarpComponent style={{background:"red"}} {...props}>
                    {newText}
                </WarpComponent>
            )
        }
    }
}