import React,{Component} from 'react';
require('./index.less');
export default class Drags extends Component{
    constructor(props){
        super(props);
        this.setState={
            clientX:null,
            clientY:null,
        }
    };
    dragMouseDown(e){
        console.log(e.clientX);
        console.log('按下');
    }
    dragMouseMove(){
        console.log('移动')
    }
    dragMouseUp(){
        console.log('抬起')
    }
    render(){
        return(
            <div className='drag' onMouseDown={this.dragMouseDown.bind(this)} onMouseMove={this.dragMouseMove.bind(this)} onMouseUp={this.dragMouseUp.bind(this)}>
                
            </div>
        )
    }
}
