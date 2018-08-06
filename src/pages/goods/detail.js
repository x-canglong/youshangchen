import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
class Detail extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header/>
				<h1>产品详情</h1>
				<Footer/>
			</div>
		)
	}
}



export default Detail;