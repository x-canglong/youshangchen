import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import $ from "jquery"
import {Link} from 'react-router-dom'
import Imag from "@/img/logogo.jpg"
import Lbt from "@/img/lbt.jpg"
import Cx from "@/img/cx.jpg"
import '@/css/list.css'

class List extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]	
		}
	}
	componentWillMount(){
		var _this = this;
		
		$.ajax({
			type:"get",
			url:"http://10.8.158.81:8050/goods",
			dataType:"json",
			success:function(data){
			
				_this.setState({arr:data})
				console.log(_this.state.arr)
				
				for(var i=3;i<6;i++){
					/*$("Z-djUl1").append('<li>'+
										'<p className="Z-djUlp1">'+
											'<a href="#">'+
												'<img src="http://img5.aolaigo.com//group1/'+data[i].wmimg.url+'" alt=""/>'+
											'</a>'+
										'</p>'+
										'<p className="Z-djUlp2">'+
											'<a href="#">'+data[i].wcap+'</a>'+
										'</p>'+
										'<p className="Z-djUlp3">'+
											'<span className="Z-djUlsp1">畅销价:</span>'+
											'<span className="Z-djUlsp2">'+data[i].sprice+'</span>'+
										'</p>'+
									'</li>')*/
					
					
				}
			}
			
		})
		
	}
	render(){
		var _this = this;
		return(
			<div>
				<Header/>
				{/*<div className="Z-cpszhe">
					<div className="Z-cpzsone"></div>
				</div>
				<div className="Z-nuv">
					<div></div>
			</div>*/}
				<div className="Z-ggcx">
					<div className="Z-glogo">
						<div>
								<a href="#" className="Z-IMg">
									<img src={Imag} alt="" />
								</a>
						</div>
						<div className="Z-cxxi">
								<div className="Z-cux">
									<p>促销信息</p>
								</div>
								<div className="Z-kxun">
									<p>优尚臣快讯</p>
								</div>
						</div>
						<div className="Z-ul1">
							<ul className="Z-ul2">
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您...</a>
								</li>
							</ul>
							
							<ul className="Z-ul3">
								<li>
									<a href="#" >优尚臣至女人的一封信</a>
								</li>
								<li>
									<a href="#" >优尚臣至女人的一封信</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您</a>
								</li>
								<li>
									<a href="#" >优尚臣至女人的一封信</a>
								</li>
								<li>
									<a href="#" >优尚臣葡萄蜜炼精粹面膜让您</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="Z-lbt">
							<img src={Lbt} alt=""/>
					</div>
				</div>
				<div className="Z-lb">
					<div className="Z-lbleft">
						<div className="Z-rxph">
							<div className="Z-rxph1">
								<p>热销排行</p>
							</div>
							<div className="Z-ulrx">
								<ul className="Z-ulrx1">
									<li>
										<a href="#">
											<span className="Z-ulsp1">1</span>
											<span className="Z-ulsp2">海葡萄洁颜净化...</span>
											<span className="Z-ulsp3">$88.0元</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="Z-ulsp1">1</span>
											<span className="Z-ulsp2">海葡萄洁颜净化...</span>
											<span className="Z-ulsp3">$88.0元</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="Z-ulsp1">1</span>
											<span className="Z-ulsp2">海葡萄洁颜净化...</span>
											<span className="Z-ulsp3">$88.0元</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="Z-ulsp1">1</span>
											<span className="Z-ulsp2">海葡萄洁颜净化...</span>
											<span className="Z-ulsp3">$88.0元</span>
										</a>
										
									</li>
									<li className="Z-bon">
										<a href="#">
											<span className="Z-ulsp1">1</span>
											<span className="Z-ulsp2">海葡萄洁颜净化...</span>
											<span className="Z-ulsp3">$88.0元</span>
										</a>										
									</li>
								</ul>
							</div>
							<div className="Z-djml">
								<p>大家还买了</p>
							</div>
							<div className="Z-djUl">
								<ul className="Z-djUl1">
									<li>
										<p className="Z-djUlp1">
											<a href="#">
												<img src={Cx} alt=""/>
											</a>
										</p>
										<p className="Z-djUlp2">
											<a href="#">海葡萄蜜炼去角...</a>
										</p>
										<p className="Z-djUlp3">
											<span className="Z-djUlsp1">畅销价:</span>
											<span className="Z-djUlsp2">44.9元</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="Z-lbright">
						<div className="Z-right1">
							<div className="Z-right2">
								<ul className="Z-riul">
									<li className="Z-rili">排序:</li>
									<li><a href="#">按上架时间</a></li>
									<li><a href="#">按价格</a></li>
									<li><a href="#">按更新时间</a></li>
								</ul>
								<p className="Z-rip">共6件商品</p>
							</div>
							<div className="Z-right3">
								<ul className="Z-riul">
									<li className="Z-rili">排序:</li>
									<li><a href="#">按上架时间</a></li>
									<li><a href="#">按价格</a></li>
									<li><a href="#">按更新时间</a></li>
								</ul>
								
							</div>
						</div>
						<div className="Z-lebi">
							<ul className="Z-lbul">
								{
									_this.state.arr.map(function(item,i){
										return(
											<li key={i}>
											<Link to={'/detail/'+item.wcode }>
											
											
												<div className="Z-lbimg">
													<a href="#">
														<img src={'http://img5.aolaigo.com//group1/'+item.wlimg[0].url} alt=""/>
													</a>
												</div>
												<div className="Z-lbxq">
													<a href="#" className="Z-lbxq1">
														<p className="Z-lbp1">畅销价:</p>
														<p className="Z-lbp2">{item.sprice
}</p>
														<p className="Z-lbp3">已售</p>
														<p className="Z-lbp4">{item.wstk}件</p>											
													</a>
													<div className="Z-lbdiv">
														<a href="#">
														{item.wname}
														</a>
													</div>
												</div>
												<div className="Z-gbut">
													<a href={'/xx?'+item.wcode} className="Z-gbut1">立即购买</a>
													{/*<Link to={'/xx/'+item.wcode}>立即购买</Link>*/}
												</div></Link>
											</li>
										)
									})
								}	
							</ul>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}



export default List;
