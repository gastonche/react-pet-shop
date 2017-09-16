import $ from 'jquery'; 



class authService {

 ID_TOKEN_KEY = 'id_token';
 ACCESS_TOKEN_KEY = 'access_token';
 CLIENT_ID = '{AUTH0_CLIENT_ID}';
 CLIENT_DOMAIN = 'AUTH0_DOMAIN';
 REDIRECT = 'YOUR_CALLBACK_URL';
 SCOPE = 'YOUR_SCOPE';
 AUDIENCE = 'AUDIENCE_ATTRIBUTE';

 	constructor(props){
 	}


	 host = "http://192.168.137.1:8080/";

	loginPost(user) {
		return new Promise((resolve, reject)=>{
			/*$.post(this.host + '/api/login',user, 
				(res)=>{
						console.log(res);
						resolve({
							data:res.content
						})
				},
				data => reject({
					error: "Wrong Username or Password",
					data:data
				})
			)

			*/

			$.ajax({
				url:this.host + '/api/sessions/login',
				data:JSON.stringify(user),
				method:'post',
				dataType:'json',
				success:function(res){
					resolve({
						data:res
					})
				},
				error:function(error){
					reject({
						error: " Could not reach the server " ,
						data:error
					})
					
				}
			})
		})
	}


	registerPost(user){
		return new Promise((resolve, reject)=>{
		/*	$.post(this.host + '/api/users/create', user, 
				(res)=>{
					console.log(res);
					resolve({
						data:res.content
					})
				},
				data => reject({
					error: " Could not reach the server " , 
					data:data
				})
			)
		*/
		console.log(user)
			$.ajax({
				url:this.host + 'api/users/create',
				data:JSON.stringify(user),
				method:'post',
				dataType:'json',
				contentType: "application/json; charset=utf-8",
				success:function(res){
					resolve({
						data:res
					})
				},
				error:function(error){
					reject({
						error: " Could not reach the server " ,
						data:error
					})
					
				}
			})
		})

	}

		logout() {
		  this.clearIdToken();
		  this.clearAccessToken();
		  this.context.router.push('/');
		}

		requireAuth(nextState, replace) {
		  if (!this.isLoggedIn()) {
		    replace({pathname: '/'});
		  }
		}

		getIdToken() {
		  return localStorage.getItem(this.ID_TOKEN_KEY);
		}

		getAccessToken() {
		  return localStorage.getItem(this.ACCESS_TOKEN_KEY);
		}

		clearIdToken() {
		  localStorage.removeItem(this.ID_TOKEN_KEY);
		}

		clearAccessToken() {
		  localStorage.removeItem(this.ACCESS_TOKEN_KEY);
		}

		// Helper function that will allow us to extract the access_token and id_token
		 getParameterByName(name) {
		  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
		  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}

		// Get and store access_token in local storage
		 setAccessToken() {
		  let accessToken = this.getParameterByName('access_token');
		  localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
		}

		// Get and store id_token in local storage
		 setIdToken() {
		  let idToken = this.getParameterByName('id_token');
		  localStorage.setItem(this.ID_TOKEN_KEY, idToken);
		}

		 isLoggedIn() {
		  const idToken = this.getIdToken();
		  return !!idToken && !this.isTokenExpired(idToken);
		}

		 getTokenExpirationDate(encodedToken) {
		  const token = this.decode(encodedToken);
		  if (!token.exp) { return null; }

		  const date = new Date(0);
		  date.setUTCSeconds(token.exp);

		  return date;
		}
		 isTokenExpired(token) {
		  const expirationDate = this.getTokenExpirationDate(token);
		  return expirationDate < new Date();

		}





}


export default authService; 


