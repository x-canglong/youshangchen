import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
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
	      }
	    });
	  }
	render(){
		 const { getFieldDecorator } = this.props.form;
		return(
			<div>
				<Header/>
				<div className="logintt wid100"><br />会员注册</div>
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
					          {getFieldDecorator('password', {
					            rules: [{ required: true, message: '请再次输入您的密码!' }],
					          })(
					            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入登录密码" />
					          )}
					        </FormItem>
					        <FormItem>
					          {getFieldDecorator('email', {
					            rules: [{ required: true, message: '请输入您的邮箱!' }],
					          })(
					            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱地址" />
					          )}
					        </FormItem>
					        <FormItem>
					          {getFieldDecorator('phonenum', {
					            rules: [{ required: true, message: '请输入您的手机号!' }],
					          })(
					            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
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
					            注册
					          </Button>
					          Or <Link to='/login'>去登录!</Link>
					        </FormItem>
					      </Form>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;