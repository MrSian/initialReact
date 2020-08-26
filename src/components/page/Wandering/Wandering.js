import React,{Component} from 'react';
import { Tabs, Badge } from 'antd-mobile';
import {Route,NavLink,Redirect,Switch,Scene,withRouter} from 'react-router-dom';
import New from './new'
import Home from '../home/home.js'
export class Wandering extends Component{
    render(){
        let {match}=this.props;
        return <div className="wandering">
        我的艺术页面
        </div>
    }
}