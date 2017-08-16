import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import HomeHeader from '../components/HomeHeader';
import Home from '../views/home';
import Car from '../views/home/car';
import Bus from '../views/home/bus';
import Login from '../views/login';

export default class RouterMap extends Component{
    render(){
        //设置当前选中状态
        
        return(
            <Router>
                <div>
                    <HomeHeader/>{/*头部导航*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/login" component={Login}/> 
                    </Switch> 
                    <Route path="/home/bus" component={Bus}/>
                    <Route path="/home/car" component={Car}/> 
                </div>
            </Router>
        )
    }
}