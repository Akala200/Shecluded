<template>
  <section id="auth">
      <div class="row">
        <div class="col justify-content-center mt-5">
			<div class="container reg">
          <div class="mb-5">
            <img class="justify-content-end" src="/img/logo.png" />
          </div>
          <div class="container">
            <h1>Verify your phone number</h1>
            <p>To apply for loan and funding</p>
            <form class="mt-5">
			  <div class="form-group">
			  </div>
			  <div class="form-group">
                <input type="text" class="form-control"  v-model="token" id="inputPassword4" placeholder="Verification code" required/>
			  </div>
			  <div class="form-group">
			  <button type="button"  @click.prevent="verify()" class="btn  btn-lg btn-block">Verify</button>
			  </div>

			  <div class="text-center">
			    <p>Didn't get a code? Send again</p>
				<p id="terms">By clicking on verify, you agree to our term & conditions and privacy policy</p>
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
      token: "",
      isLoading: false,
      fullPage: true   
    };
  },
  components: {
    Loading
  },
  methods: {
    verify: function() {
      this.isLoading = true;
      let data = {
        token: this.token,
      };
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
      if(this.token !== ''){
        this.$store
        .dispatch("verify", data)
        .then( function (response) {
           (response) =>
            setTimeout(() => {
              this.isLoading = false;
            }, 5000),
        
            Toast.fire({
  type: 'success',
  title: 'Email sent'
})
        }
  )
        .catch( function (error) {
           Toast.fire({
  type: 'error',
  title: 'Invalid token'
})
        } 
        );
      }
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
