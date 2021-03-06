import React, { Component } from 'react'; 
import authService from './auth.service';

class authRegister extends Component { 
	error = false; 
	user = {
		firstName: '',
		email:'',
		password:'',
		phoneNumber:'',

	}

	constructor(props){
		super(props);

		this.register 			= this.register.bind(this);
		this.changeEmail 	= this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.changeName 	= this.changeName.bind(this);
		this.changePhone	= this.changePhone.bind(this);
		this.state = {
			user: this.user
		}

		this.authService = new authService();
	}


  	register(event){
  		event.preventDefault();

  		this.error = null; 
  		this.success = null; 

		this.authService.registerPost(this.state.user).then((res)=>{
			console.log(res);
			this.success=true;

			setTimeout(()=>{
					this.props.router.push('/');
			}, 500)


		}).catch((error)=>{
			this.error = true; 
			this.error_data = error;
			console.log(error);
		})

		 


		}


	changeEmail(event){
	   this.setState({user: { email: event.target.value } } )
	}

	changePassword(event){
		this.setState({user : {password : event.target.value} })
	}

	changeName(event){
		this.setState({user: {firstName : event.target.value}})
	}

	changePhone(event){
		this.setState({user: {phoneNumber : event.target.value}})
	}


	render() { 

	
		return (

				<div>

					<section> 
						<div className='container'>
							<div className='col-sm-8 col-sm-offset-2'>


							<br />
								<center> <h3> Please Register or <a href='/auth/login'> Login Here </a> </h3> </center>

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

								<form className="form-horizontal" onSubmit={this.register}>
								  <div className="form-group">
								    <label className="control-label col-sm-2" >Full Name:</label>
								    <div className="col-sm-10">
								      <input type="text" className="form-control" id="name" placeholder="Enter full name" value={this.state.user.firstName} onChange={this.changeName}/>
								    </div>
								  </div>
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
								    <label className="control-label col-sm-2" >Phone:</label>
								    <div className="col-sm-10"> 
								      <input type="password" className="form-control" id="phone" placeholder="Enter phone number" value={this.state.user.phoneNumber} onChange={this.changePhone}/>
								    </div>
								  </div>
								 
								  <div className="form-group"> 
								    <div className="col-sm-offset-2 col-sm-10">
								      <button type="submit" className="btn btn-primary btn-block">Submit</button>
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


export default authRegister

