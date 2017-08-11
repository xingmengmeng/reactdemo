import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class HomeHeader extends Component{
    render(){
        return(
            <div>
                头部导航
                <Link to='/login'>登录</Link>
                <Link to='/home'>首页</Link>
            </div>
        )
    }
}
