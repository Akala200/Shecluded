<template>
  <section id="login" class="m-0 p-0">
		<div class="row">
			<div class="col-6 column1">
				<img src="/img/login.png" alt="">
			</div>
			<div class="res1 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
				<div class="col-md-8 col-sm-12">
					<h1>Welcome!</h1>
					<h2>Kindly Login with your Username and Password</h2>
					<div class="mt-5">
						<p class="p2">Username</p>
						<input type="text" v-model="username" placeholder="Enter Username" class="form-control p-4">
					</div>
					<div class="mt-4">
						<p class="p2">Password</p>
						<input type="text" v-model="password" placeholder="Enter Password"  class="form-control p-4">
					</div> 
					<p v-text="loginError" style="color:red"></p>
					<button class="btn play mt-5 py-2 px-5" 
						@click.prevent="authenticate()" 
						>Login</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	data(){
    return {  
      username:'',
      password:''
    }
	},
	methods: {
		...mapActions(['login']),
		async authenticate(){
			await this.login({username: this.username,password: this.password});
		}

  },
	computed: {
    ...mapState(['loginError'])
	}
}
</script>

<style>
#login { 
	font-family: Circular Std;
	margin:0;
	padding:0;
}
.back{
	color: #fff !important;
}
#login .column1{ 
	height:100%;
	margin:0;
	padding:0
}
#login h1 {
	font-size: 48px;
	line-height: normal;
	color: #333333;
}
#login input {
	background-color: #FAFAFA;
	border-radius: 2px;
	color:#333;
	font-size:18px;
}
#login h2 { 
	font-size: 24px;
	line-height: 28px;
	color: #666666;
}
#login p { 
	font-size: 22px;
	line-height: 28px;
	color: #333;
}
input ::placeholder { 
	font-size: 20px;
	color: #ccc!important;
	margin-bottom: 7px !important;
}
#login img{
	width:100%;
	height:100%;
	background-size:cover;
	object-fit:cover;
}
#login .play{ background-color: #269A4C; 
  color:#fff; 
	font-size: 20px;
	text-transform: none;
	font-weight:bold; 
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
	border-radius: 2px;
}
@media screen and (max-width:1040px) {
#login .column1{ 
	display:none;
}
}
@media screen and (max-width:600px) {
#login {  
	padding:15px!important;
}
#login h1 {
	font-size: 38px;
	text-align:center;
}
#login h2,
#login p { 
	font-size: 20px;
}
}
</style>
