import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from '../views/home';
import Car from '../views/home/car';
import Bus from '../views/home/bus';
import Login from '../views/login';
export default class RouterMap extends Component{
    render(){
        //设置当前选中状态
        const ListItemLink = ({ to,label, ...rest }) => (
            <Route path={to} children={({ match }) => (
                <li className={match ? 'active' : ''}>
                <Link to={to} {...rest}>{label}</Link>
                </li>
            )}/>
        )
        return(
            <Router>
                <div>
                    <ul className='cc'>
                        <ListItemLink to="/home" label="Home"/>
                        <ListItemLink to="/login" label="Login"/>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/home/bus" component={Bus}/>
                    <Route path="/home/car" component={Car}/>    
                    <Route path="/login" component={Login}/>   
                </div>
            </Router>
        )
    }
}