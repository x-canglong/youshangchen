import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
class Xiadan extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header/>
				<h1>下单</h1>
				<Footer/>
			</div>
		)
	}
}



export default Xiadan;