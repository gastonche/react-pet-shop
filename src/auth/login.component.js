import React, { Component } from 'react'; 
import authService from './auth.service';

class authLogin extends Component { 
	error = false; 
	error_name = '';
	user = {
		email:'',
		password:''
	}

	constructor(props){
		super(props);

		this.login = this.login.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.state = {
			user: this.user
		}

		this.authService = new authService();
	}


  	login(event){
  		event.preventDefault();
  		console.log(this.state.user)
  		this.success=null; 
  		this.error = null; 
  		this.error_name = null;

		this.authService.loginPost(this.state.user).then((res)=>{
			console.log('me');
			this.error = false; 
			this.success = true; 

			setTimeout(()=>{
				this.props.router.push('/');
			}, 500)
		}).catch((error)=>{
			this.error = true; 
			this.success=false; 
			this.error_name = error.error;
			
		})

		 


		}


	changeEmail(event){
	   this.setState({user:{ email: event.target.value } } )
	}

	changePassword(event){
		this.setState({user: { password : event.target.value} })
	}


	render() { 

	
		return (

				<div>
					<section> 
						<div className='container'>
							<div className='col-sm-8 col-sm-offset-2'>


							<br />
								<center> <h3> Please login or <a href='/auth/register'> Sign Up Here </a> </h3> </center>

								<br /> 

								{
									(this.error)?(
											<div className='alert alert-danger'>
												<span> {this.error_name} </span>
											</div>
										):''
								}

								{


									(this.success)?(
											<div className='alert alert-success'>
												<span> You have login successfully</span>
											</div>
										):''
								}

								<br />

								<form className="form-horizontal" onSubmit={this.login}>
								  <div className="form-group">
								    <label className="control-label col-sm-2" >Email:</label>
								    <div className="col-sm-10">
								      <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.user.email} onChange={this.changeEmail}/>
								    </div>
								  </div>
								  <div className="form-group">
								    <label className="control-label col-sm-2" >Password:</label>
								    <div className="col-sm-10"> 
								      <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={this.state.user.password} onChange={this.changePassword}/>
								    </div>
								  </div>
								 
								  <div className="form-group"> 
								    <div className="col-sm-offset-2 col-sm-10">
								      <button type="submit" className="btn btn-primary btn-block ">Submit</button>
								    </div>
								  </div>
								</form>

							</div>
						</div>
					</section>

				</div>




			)
	}
}


export default authLogin 

