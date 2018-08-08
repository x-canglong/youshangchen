import React from 'react'
import {Router} from 'react-router-dom'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import store from '@/store/index'
class User extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		console.log(11111)
		console.log(store.getState().reducer.isLogin)
		/*if(store.getState().reducer.isLogin==false){
			this.props.history.push('/login')
//			window.location.href='/login'
		}*/
	}
	render(){
		return(
			<div>
				<Header/>
				<h1>我的优尚臣</h1>
				<Footer/>
			</div>
		)
	}
}

export default User;