<template>
  <section id="auth">
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      ></loading>
    </div>
      <div class="row">
        <div class="col justify-content-center mt-5">
			<div class="container reg">
          <div class="mb-5">
            <img class="justify-content-end" src="/img/logo.png" />
          </div>
          <div class="container">
            <h1>Login</h1>
            <p>To apply for loan and funding</p>
            <form class="mt-5">
			  <div class="form-group">
			  </div>
			  <div class="form-group">
                <input type="email" class="form-control" v-model="email" id="inputPassword4" placeholder="Email" required/>
			  </div>
			  <div class="form-group">
                <input type="password" class="form-control" v-model="password" id="inputPassword4" placeholder="Password" required/>
			  </div>
			  <div class="form-group">
			  <button type="button" @click.prevent="login()" class="btn  btn-lg btn-block">Login</button>
			  </div>

			  <div class="text-center">
			    <p>Don't have an account? <router-link to="/register"> <span>Register</span></router-link></p>
				<p id="terms">By clicking on signup, you agree to our term & conditions and privacy policy</p>
			</div>
            </form>
          </div>
        </div>
        </div>
        <div style="background: url(/img/background.png);height: 800px;" class="col d-none d-lg-block img">
		</div>
      </div>
  </section>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      fullPage: true   
    };
  },
  components: {
    Loading
  },
  methods: {
    login: function() {
      this.isLoading = true;
      let data = {
        email: this.email,
        password: this.password
      };
            const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
      this.$store
        .dispatch("login", data)
        .then(
          () =>
            setTimeout(() => {
              this.isLoading = false;
            }, 5000),

Toast.fire({
  type: 'success',
  title: 'Login was successful'
}),
          this.$router.push("dashboard")
        )
        .catch(err =>
        Toast.fire({
  type: 'error',
  title: 'Could not login'
})
        );
    }
  }
};
</script>
 
<style scoped>
#auth  {
  width: inherit;
}
#auth h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: normal;
  font-weight: bolder;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
}
#auth button {
    height: 48px;
	background: #F740AC;
    border-radius: 4px;
	color:#ffffff;
}
#auth p {
	font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 19px;
color: #000000;
}
#auth p span {
	color: #F740AC !important;
	   text-decoration: none;

}
#auth p  a {
	   text-decoration: none;
}
#auth #terms {
		font-size: 13px !important;
}
#auth .img {
	 display: block;
  margin-left: auto;
  margin-right: auto;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}

@media screen and (min-width:1040px) {
 #auth .reg {
	padding-left: 90px;
	padding-right: 60px;
}
}

</style>
