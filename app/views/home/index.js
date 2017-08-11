import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default class home extends Component{
    constructor(){
        super();
    }
    render() {
        //匹配当前url  设置为active
        const ListItemLink = ({ to,label, ...rest }) => (
            <Route path={to} children={({ match }) => (
                <Link to={to} {...rest} className={match ? 'active' : ''}>{label}</Link>
            )}/>
        )
        return(
            <div>
                
                <span>home</span>
                <ListItemLink to="/home/car" label="car"></ListItemLink>
                <ListItemLink to="/home/bus" label="bus"></ListItemLink>
                {/*<Link to="/home/car">car</Link>
                <Link to="/home/bus">bus</Link>*/}
            </div>
        )
    }
}