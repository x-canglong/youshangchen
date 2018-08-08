import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import $ from 'jquery'
import '@/css/detail.css'
import img3 from '@/img/jrg.jpg'
import img4 from '@/img/seeg.jpg'
import img5 from '@/img/scsp.jpg'
class Detail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shu: 10,
			num: 1,
			shangpin: '',
			mprice: '',
			sprice: '',
			code: "",
			wstk: "",
			wname: "",
			xiaotuu: '',
			xiaotu: []
		}
	}
	componentDidMount() {
		var _this = this;
		$.ajax({
			type: "get",
			url: "http://10.8.158.81:8050/goodsdetail",
			async: true,
			data: {
				wcode: _this.props.match.params.wcode
			},
			success: function(data) {
				_this.setState({
					shangpin: data[0].wcap,
					mprice: data[0].mprice,
					sprice: data[0].sprice,
					code: data[0].wcode,
					wstk: data[0].wstk,
					wname: data[0].wname,
					xiaotuu: "http://img5.aolaigo.com//group1/" + data[0].wlimg[0].url,
					xiaotu: data[0].wlimg
				})
				console.log(data[0])
			}
		})
	}
	jia() {
		this.setState({
			num: (this.state.num == this.state.shu) ? this.state.shu : (this.state.num + 1)
		});
	}
	jian() {
		this.setState({
			num: (this.state.num == 1) ? this.state.num : (this.state.num - 1)
		});
	}
	qqq(i) {
		console.log(i)
	}
	render() {
		var _this = this;
		return(
			<div>
				<Header/>
				<div id="pop_detail_body">
					<div className="xinxi">
						<a href="javascript:;">当前位置: 首页</a>
						&gt;
						<a href="javascript:;" className="xinxx">化妆品</a>
						&gt;
						<a href="javascript:;" className="deal_com">{this.state.shangpin}</a>
					</div>
					<div className="pop_fangda">
						<div id="box_lwrap">
							<div id="box_l">
								<img src={this.state.xiaotuu}/>
								<div id="shou"></div>
							</div>
							<div className="zhuangzheta">
								<a href="javascript:;" className=" cs fl zhea"></a>
								<div className="box_chuangkou" id='imggg'>
									<ul>
										{
											this.state.xiaotu.map(function (item,i) {
												return(
													<li key={i} >
														<img  src={"http://img5.aolaigo.com//group1/"+item.url}/>
													</li>
												)
											})
										}
									</ul>
								</div>
								<a href="javascript:;" className="cs fr zheb"></a>
							</div>
							<div id="box_r" className="fl">
								<img src={this.state.xiaotuu}/>
							</div>
					</div>
					<div id="box_rwrap">
						<h1 className="pop_text deal_com">
						{this.state.shangpin}
						</h1>
						<span>{this.state.wname}</span>
						
						<div className="itemin_price">
							<ul>
								<li className="old_price gray">原&nbsp;&nbsp;价：
									<span>   ￥{this.state.mprice}元 
									</span>
								</li>
								<li className="now_price red">促销价：<span>￥{this.state.sprice}元</span></li>
								<input type="hidden" value="￥{this.state.sprice}元" id="xianjia"/>
								<input type="hidden" value="￥{this.state.mprice}元" id="yuanjia"/>
								<li className="favorable">所属品牌：海葡萄护肤系列</li>
								<li className="bianhao gray">编号：{this.state.code} </li>
								<li>积   分：可获<span className="red">10 </span>积分</li>
								<li className="sale">已售：
									<span className="red">{this.state.wstk}</span>件 
									<span className="satisfy">
										客户评价数：
										<span className="red">40</span>个
									</span>&nbsp;&nbsp;
								</li>
								<li className="ser gray">服务：由<span className="red">&nbsp;优尚臣&nbsp;</span>
									发货并提供售后服务。
								</li>
							</ul>
						</div>
						<dl className="change_wrap num_wrap">
							<dt className="pop_meta_tit">我要买</dt>
							<dd id="J_Amount">
									<span className="pop_amount_wrap ">                
										<a href="javascript:;" className="increase_num" onClick={this.jia.bind(this)}></a>
										<input type="text"  value={this.state.num}  className="amout_input"/>
										<a href="javascript:;" className="decrease_num" onClick={this.jian.bind(this)}></a>
									</span>
							</dd>
						</dl>
						<div className="buybt">
							<a href="javascript:;">
								<img src={img3} width="140" height="33" border="0"/>
							</a>&nbsp;
							<a style={{display: "inline-block"}} href="javascript:;">
								<img src={img4} width="140" height="31" border="0"/>
							</a>&nbsp;
							<a href="javascript:;" title="收藏该商品">
							  <img src={img5} width="100" height="31" border="0"/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
			</div>
		)
	}
}

export default Detail;