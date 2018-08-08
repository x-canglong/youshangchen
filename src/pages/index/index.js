import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import banner1 from '@/img/shangchengshouye1.jpg'
import banner2 from '@/img/shangchengshouye7.jpg'
import banner3 from '@/img/shangchengshouye3.jpg'
import banner4 from '@/img/shangchengshouye4.jpg'
import banner5 from '@/img/shangchengshouye5.jpg'
import banner6 from '@/img/shangchengshouye6.jpg'
class Home extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header/>
				 <div>
				 	<p>
				 		<a href="javascript:;">
				 			<img src={banner1}/>
				 		</a>
				 		<a href="javascript:;">
				 			<img src={banner2}/>
				 		</a>
				 		<a href="javascript:;">
				 			<img src={banner3}/>
				 		</a>
				 		<a href="javascript:;">
				 			<img src={banner4}/>
				 		</a>
				 		<a href="javascript:;">
				 			<img src={banner5}/>
				 		</a>
				 		<a href="javascript:;">
				 			<img src={banner6}/>
				 		</a>
				 	</p>
				 </div>
				<Footer/>
			</div>
		)
	}
}



export default Home;