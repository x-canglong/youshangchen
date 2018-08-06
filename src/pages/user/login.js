import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import store from '@/store/index'
import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import $ from 'jquery'
import {
    changeIsLogin,
    setCarCount
} from '@/store/Action'
import '@/css/login.css'
const FormItem = Form.Item;
class NormalLoginForm extends React.Component{
	constructor(props){
		super(props)
	}
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        $.ajax({
	        	type:"get",
	        	url:"http://10.8.158.81:8050/users/login",
	        	data:{
	        		userName:values.userName,
	        		password:values.password
	        	},
	        	success:function(data){
	        		console.log(data)
	        		if(data==0){
	        			alert("用户名密码错误！")
	        		}else{
	        			console.log(store.getState().reducer.isLogin)
	        			alert("登录成功")
	        			store.dispatch( changeIsLogin(values.userName) )
	        			this.props.history.push('/user')
	        			console.log(store.getState().reducer.isLogin)
	        		}
	        	}
	        })
	       
	      }
	    });
	  }
	render(){
		 const { getFieldDecorator } = this.props.form;
		return(
			<div>
				<Header/>
				<div className="logintt wid100"><br />会员登录</div>
				<div className="login wid100">
					<div className="loginleft"></div>
					<div className="loginright">
						<Form onSubmit={this.handleSubmit} className="login-form">
					        <FormItem>
					          {getFieldDecorator('userName', {
					            rules: [{ required: true, message: '请输入您的用户名!' }],
					          })(
					            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
					          )}
					        </FormItem>
					        <FormItem>
					          {getFieldDecorator('password', {
					            rules: [{ required: true, message: '请输入您的密码!' }],
					          })(
					            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入登录密码" />
					          )}
					        </FormItem>
					        
					        <FormItem>
					          {getFieldDecorator('remember', {
					            valuePropName: 'checked',
					            initialValue: true,
					          })(
					            <Checkbox>记住密码</Checkbox>
					          )}
					          <a className="login-form-forgot" href="">忘记密码</a>
					          <Button type="primary" htmlType="submit" className="login-form-button">
					            登录
					          </Button>
					          Or <Link to='/register'>去注册!</Link>
					        </FormItem>
					      </Form>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

const Login = Form.create()(NormalLoginForm);

export default Login;