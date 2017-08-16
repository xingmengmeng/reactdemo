import React,{Component} from 'react';
require('./index.less');
export default class Drags extends Component{
    constructor(props){
        super(props);
        this.state={
            draging:false,
            x:null,
            y:null,
        }
    }
    handleMouseLeave(e){
		this.setState({draging:false});
	}
    dragMouseDown(e){
        this.setState({
            draging:true,
            x:e.clientX-this.props.left,
            y:e.clientY-this.props.top,
        })
        document.onmousemove=(e)=>{this.dragMouseMove(e)};
        document.onmouseup=(e)=>{this.dragMouseUp(e)};
        e.preventDefault();
    }
    dragMouseMove(e){
        const moveX=e.clientX-this.state.x,
              moveY=e.clientY-this.state.y;
        this.props.callbackParentFn(moveX,moveY);
    }
    dragMouseUp(e){
        document.onmousemove=null;
        document.onmouseup=null;
        this.setState({
            draging:false,
            x:null,
            y:null,
        })
    }
    render(){
        return(
            <div className='drag' onMouseLeave={this.handleMouseLeave.bind(this)} onMouseDown={this.dragMouseDown.bind(this)}></div>
        )
    }
}
