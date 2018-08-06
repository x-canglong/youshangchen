import React from 'react'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
class List extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header/>
				<h1>产品展示</h1>
				<Footer/>
			</div>
		)
	}
}



export default List;