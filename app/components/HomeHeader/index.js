import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
export default class HomeHeader extends Component{
    render(){
        //设置当前页面选中状态
        const ListItemLink = ({ to,label, ...rest }) => (
            <Route path={to} children={({ match }) => (
                <li className={match ? 'active' : ''}>
                <Link to={to} {...rest}>{label}</Link>
                </li>
            )}/>
        )
        return(
            <div>
                头部导航
                <ul className='cc'>
                        <ListItemLink to="/home" label="Home"/>
                        <ListItemLink to="/login" label="Login"/>
                    </ul>
            </div>
        )
    }
}
