import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import HomeHeader from '../components/HomeHeader';
import Home from '../views/home';
import Car from '../views/home/car';
import Bus from '../views/home/bus';
import Login from '../views/login';
import Test from '../views/Test';

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
                        <Route path="/test" component={Test}/>
                    </Switch> 
                </div>
            </Router>
        )
    }
}