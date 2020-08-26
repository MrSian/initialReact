import React,{Component} from 'react';
import { Tabs, Badge,List,Carousel,Grid } from 'antd-mobile';
import {Route,NavLink,Redirect,Switch,Scene,withRouter} from 'react-router-dom';
import New from './new';
import Header from './header'
import axios from 'axios';
class Home extends Component{
    constructor(){
        super();
        this.state={
            // 轮播图数组
            banner:[],
            // 全部产品列表
            Duckweedlist:[],
             
        }
    }
    componentWillMount(){
        axios.get("/lifevone/1.0/v_h5_5.1.2_33/contents/home_v2", {
            params: {
                o:'http%3A%2F%2Fm.lifevc.com',
                NewCartVersion:true
            }
          })
          .then(res => {
            let data = res.data.InnerData[0].InnerData;
            let Duck=res.data.InnerData;
            let Dlist=[];
            for(let a=1;a<Duck.length;a++){
                Dlist.push(Duck[a].InnerData.ImageUrl)
                // ShortCut_2   CombinationChart CombinationChart .....
            }
            console.log(data)
            this.setState({
				banner:data,
				Duckweedlist:Dlist.slice(4)
			});
          })
    }
    
    render(){
        let {match}=this.props;
        return <div className="wandering">
        <Header/>
            <Carousel
                autoplay={true}
                infinite
                >
                {this.state.banner.map(goods => (
                    <a
                    key={goods.TargetId}
                    href="#"
                    style={{height:'320px'}}
                    >
                    <img
                        src={"http://i.lifevccdn.com/"+goods.ImageUrl}
                        style={{ width: '100%', height:'250px', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                    </a>
                ))}
                </Carousel>
        </div>
    }
}
Home = withRouter(Home);

export {Home};