import React,{Component} from 'react';
import Drag from '../../components/Drags';
export default class login extends Component{
    constructor(){
        super();
        this.state={
            top:100,
            left:100,
        }
    }
    callbackParent(x,y){
        this.setState({
            top:x,
            left:y,
        })
    }
    render() {
        const top= this.state.top;
		const left = this.state.left;
        return(
            <div style={{'position':'relative'}}>
                login
                <div style={{'position':'absolute','top':top+'px','left':left+'px'}}>
                    <Drag top={this.state.top} left={this.state.left} callbackParentFn={this.callbackParent.bind(this)}></Drag>
                </div>
            </div>
        )
    }
}