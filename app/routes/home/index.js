import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Car from '../../views/home/car';
import Bus from '../../views/home/bus';

export default class RouterMap extends Component{
    render(){
        //匹配当前url  设置为active
        const ListItemLink = ({ to,label, ...rest }) => (
            <Route path={to} children={({ match }) => (
                <Link to={to} {...rest} className={match ? 'active' : ''}>{label}</Link>
            )}/>
        )
        //设置当前选中状态
        return(
            <Router>
                <div>
                    <ListItemLink to="/home/car" label="car"></ListItemLink>
                    <ListItemLink to="/home/bus" label="bus"></ListItemLink>
                    <Switch>
                        <Route path="/home/bus" component={Bus}/>
                        <Route path="/home/car" component={Car}/>  
                    </Switch>    
                </div>
            </Router>
        )
    }
}