import React,{Component} from 'react';
import Drag from '../../components/Drags';
export default class login extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                login
                <Drag></Drag>
            </div>
        )
    }
}