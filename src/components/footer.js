import React from 'react'
import wxewm from '@/img/wxewm.jpg'
import scewm from '@/img/scewm.jpg'
import yl from '@/img/yl.jpg'
import zfb from '@/img/zfb.jpg'
import cxwz from '@/img/cxwz.jpg'
import jyxba from '@/img/jyxba.jpg'
import '@/css/footer.css'
class Footer extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="footer-xmh">
				  <div className="wid mb15">
				    <div className="ewm fl">
				    <img src={wxewm} />
				    <br />
				      优尚臣官方微信<br />
				      微信号：YOUSHANGCHEN</div>
				    <div className="ewm fl"><img src={scewm} /><br />
				      优尚臣手机商城<br />
				      微信号：YOUSHANGCHEN</div>
				    <div className="explain fr">
				      <ul>
				        <li className="zheng"><a href="javascript:;">全店正品</a><br />
				          <span>官方推荐<br />
				          假一赔三</span></li>
				        <li className="nuo"><a href="javascript:;">一诺千金</a><br />
				          <span>中国网上零售<br />
				          诚信品牌100强</span></li>
				        <li className="guan"><a href="javascript:;">官方唯一直营商城</a><br />
				          <span>配送中心直<br />
				          接处理订单、发货</span></li>
				        <li className="tui"><a href="javascript:;">无理由退货</a><br />
				          <span>7日内您完全可以无理由退货（仅限未开封、未使用、不影响第二次销售）</span></li>
				        <li className="hours"><a href="javascript:;">365X24小时</a><br />
				          <span>
				           全年无休 <br />给您最贴心的服务</span></li>
				      </ul>
				    </div>
				    <div style={{clear:'both'}}></div>
				  </div>
				</div>
				<div className="b_menu">
				  <div className="wid">
				    <dl className="zhinan">
				      <dt>新手指南</dt>
				        
				                                                        
				                                <dd><a href="javascript:;">新手指南</a></dd>
				                                                        
				                                <dd><a href="javascript:;">常见问题</a></dd>
				                                                        
				                                <dd><a href="javascript:;">联系客服</a></dd>
				                                                        
				                                <dd><a href="javascript:;">购物流程</a></dd>
				                            </dl>
				    <dl className="peisong">
				      <dt>支付/配送</dt>
				                                       <dd><a href="javascript:;">货到付款</a></dd>
				                                                        <dd><a href="javascript:;">网银支付</a></dd>
				                                                        <dd><a href="javascript:;">支付宝</a></dd>
				                            </dl>
				    <dl className="shouhou">
				      <dt>售后服务</dt>
				                                      <dd><a href="javascript:;">退货办理</a></dd>
				                                                        <dd><a href="javascript:;">退货政策</a></dd>
				                                                        <dd><a href="javascript:;">正品保证</a></dd>
				                                                        <dd><a href="javascript:;">售后咨询</a></dd>
				                            </dl>
				    <dl className="hy_zhengce">
				      <dt>会员政策</dt>
				                                       <dd><a href="javascript:;">积分制度 </a></dd>
				                                                        <dd><a href="javascript:;">会员优惠 </a></dd>
				                                                        <dd><a href="javascript:;">积分兑换</a></dd>
				                            </dl>
				    <dl className="ps_fangshi">
				      <dt>配送方式</dt>
				                                    <dd><a href="javascript:;">运费说明</a></dd>
				                                                        <dd><a href="javascript:;">配送说明</a></dd>
				                            </dl>
				    <dl className="zs_daili">
				      <dt>招商代理</dt>
				                                       <dd><a href="javascript:;">招商代理</a></dd>
				                            </dl>
				    <div style={{clear:'both'}}></div>
				  </div>
				</div>
				<div className="copyright">
				  <div className="wid">
				   <p>                                         
						<a href="javascript:;">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;
				                                                        
						<a href="javascript:;">联系我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;
				                                                        
						<a href="javascript:;">招商合作</a>&nbsp;&nbsp;|&nbsp;&nbsp;
				                                                        
						<a href="javascript:;">广告洽谈</a>&nbsp;&nbsp;|&nbsp;&nbsp;
				                <a href="javascript:;">行业资讯</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='#top'>返回顶部</a></p>
				    <p>微信号：YOUSHANGCHEN&nbsp;&nbsp; 京ICP备13043973-2 &nbsp;&nbsp;经营许可证编号：京ICP证140035号&nbsp;&nbsp;|&nbsp;&nbsp;北京金瑞姿商贸有限公司<br />
				      地址：北京市朝阳区东三环中路39号院9号楼 | 电话：010-58698428 | 邮箱：youshangchen@163.com | 传真：010-58698428<br />
				      金瑞姿网站：www.jinruizi.com&nbsp;&nbsp;</p>
				    <p><img src={yl}/>&nbsp;&nbsp;<img src={zfb} />&nbsp;&nbsp;<img src={cxwz} />&nbsp;&nbsp;<img src={jyxba}/></p>
				  </div>
				</div>
			</div>
		)
	}
}



export default Footer;