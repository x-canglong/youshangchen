import React from 'react'
import {Link} from 'react-router-dom'
import '@/css/header.css'
class Header extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="header">
				  <div className="cont">
				    <ul className="topmenu" clearfix="" id="jq_topmenu">
					    <li> 	<li>
					欢迎光临优尚臣,请
					<Link to='/login'>登录</Link>
					</li>
				        <li>|</li>
				        <li><Link to='/register'>注册</Link></li>
				        <li>|</li>
				 </li>
						<li className="webnav" qxpp="" style={{background:'none'}}> 
						<Link to='/user' className="icon_arr">我的优尚臣</Link>
				            <div className="jq_hidebox" style={{display: "none"}}>
							<dl>
							   <dd> <a href="javascript:;" title="我的订单">我的订单</a></dd>
							   <dd><a href="javascript:;" title="我的订单">我的积分</a></dd>
							   <dd><a href="javascript:;" title="我的订单">我的收藏</a></dd>
							</dl> </div>
				        </li>
						  <li>|</li>
						<li><Link to='/cart'>我的购物车</Link>
							</li>
				        <li>|</li>
				        <li className="weixin"> <strong> 微网站 </strong>
				            <div className="jq_hidebox" style={{display:"none"}}>
				              <div className="wxht"></div>
				            </div>
				      </li>
				        <li>|</li>
				        <li className="weixin"> <strong> 手机商城 </strong>
				            <div className="jq_hidebox" style={{display:"none"}}>
				              <div className="wxht"></div>
				            </div>
				      </li>
				        <li>|</li>
				        <li><a href="javascript:;" title="帮助中心">帮助中心</a></li>
				        <li>|</li>
				        <li><a href="javascript:;">收藏本站</a></li>
				    </ul>
				      <div style={{clear:"both"}}></div>
				    </div>
				  </div>
				  
				<div className="xmh-top">
				  <div className="wid">
				    <div className="logo fl">
					    <a href="javascript:;">
					    	<div className='xmh-logo'></div>
					    	{/*<img  src="" alt="优尚臣" border="0" />*/}
					    </a>
				    </div>
				    <div className="nav fl">
				      <ul>
				        <li>
				        <Link to='/' className="current">网站首页</Link>
				        </li>
				        <li><a href="javascript:;">品牌理念</a></li>
				        <li>
				        <Link to='/list'>产品展示</Link>
				        </li>
				       {/*<li><a href="javascript:;">促销专区</a></li>*/}
				        <li><a href="javascript:;">护肤达人</a></li>
				        <li>
				        <Link to='/user'>会员中心</Link>
				        </li>
				      </ul>
				      <div style={{clear:"both"}}></div>
				    </div>
				    <div className="top-search fr">
						<form id="searchForm" name="searchForm" method="get" action="search.php">
					      <ul className="search">
					        <li className="seatch_tx">
					        
							   <input name="keywords" type="text" id="keyword" value="" className="text" />
					        </li>
					        <li class="search_btn">
					          <input type="submit" value="搜索"  className="button"/>
					        </li>
							
					        <div style={{clear:'both'}}></div>
					      </ul>
					    </form>
				      <div className="hot_search">热门搜索 :
				    	<a href="javascript:;" title="面膜">面膜</a>
				       <a href="javascript:;" title="卸妆水">卸妆水</a>
				       <a href="javascript:;" title="去角质">去角质</a>
				       <a href="javascript:;" title=""></a>
				   		</div>
				    </div>
				    <div style={{clear:"both"}}></div>
				  </div>
				</div>
			</div>
		)
	}
}



export default Header;