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
        this.setState({
            clientX:e.clientX,
            clientY:e.clientY,
        })
    }
    dragMouseMove(){
        
    }
    dragMouseUp(){
        
    }
    render(){
        return(
            <div className='drag' onMouseDown={this.dragMouseDown.bind(this)} onMouseMove={this.dragMouseMove.bind(this)} onMouseUp={this.dragMouseUp.bind(this)}>
                
            </div>
        )
    }
}
