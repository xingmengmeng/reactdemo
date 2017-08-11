import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import 'whatwg-fetch';
import 'es6-promise';

export default class home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        fetch('/api/getMenus.gm')
            .then(res => console.log(res))
            .then(this.setState({
                //...
            }))
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