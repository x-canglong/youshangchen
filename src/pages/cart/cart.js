import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
class Cart extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header/>
				<h1>gouwuche</h1>
				<Footer/>
			</div>
		)
	}
}



export default Cart;