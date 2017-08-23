import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import store from '../../store';
import * as actions from '../../actions'; 
import {getMenu,getList} from '../../fetch/home';//封装过来的接口

export default class home extends Component{
    constructor(props){
        super(props);
        this.state={
            liAry:'1',
            txtAay:['txt1','txt2','txt3'],
            btnTxt:0,
            storeTxt:33,
        }
        this.testClick=this.testClick.bind(this);
        
    }
    componentDidMount(){
        /*fetch('/api/getMenus.gm',{credentials: 'include'})
            .then(res => console.log(res))
            .then(this.setState({
                //...
            }));*/
        getMenu().then(data=>{
            //console.log(data);
            //console.log(data.msg);
        })
        getList().then(data=>{
            //console.log(data);
        })
        window.addEventListener('click',this.testClick);
        this.setState({'storeTxt':store.getState().counter});
        
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.testClick);
    }
    testClick(){
        let temLi=this.state.liAry;
        temLi++;
        this.setState({'liAry':temLi});

        store.dispatch(actions.inc());//根据type选择做什么事情
        this.setState({'storeTxt':store.getState().counter});//绑定改变后的状态值
    }
    txtAdd(){
        this.state.btnTxt++;
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
                <br/>
                <p>{this.state.liAry}</p>
                {this.state.liAry==1&&
                    <p>判断语句</p>
                }
                {this.state.liAry==2?(
                    <p>值为2</p>
                ):(
                    <p>值不为2</p>
                )}
                <ul>
                    {this.state.txtAay.map((item,index)=>
                        <li key={index}>{item}</li>
                    )}
                </ul>
                <input type="button" value="点击" onClick={this.txtAdd.bind(this)}/>
                <br/>
                <span>{this.state.btnTxt}</span>

                <p>
                    store中存的值{this.state.storeTxt}
                </p>
            </div>
        )
    }
}