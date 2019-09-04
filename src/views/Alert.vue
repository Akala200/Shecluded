<template>
  <section id="info">
    <div class="row">
      <div class="mx-auto mt-3 top-logo">
            <img class="justify-content-end" src="/img/logo.png" />
          </div>
    </div>
    <div class="row">
       <div class="mx-auto text-center mt-2 top-logo">
            <h4>Your phone number has<br>been verified</h4>
        </div>
      </div>
      <div class="row">
       <div class="mx-auto bottom-logo">
            <img class="justify-content-end img" src="/img/ok.png" />
          </div>
      </div>
      <div class="row">
       <div class="mx-auto text-center">
            <p class="info">We have sent you an email.<br> Please click on the verification link in<br> the email to confirm your registration.</p>
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
#info  {
  width: inherit;
}

#info button {
    height: 48px;
	background: #F740AC;
    border-radius: 4px;
	color:#ffffff;
}

#info p span {
	color: #F740AC !important;
	   text-decoration: none;

}

#info .info {
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #000000;
}
#info #terms {
		font-size: 13px !important;
}
#info .side-img {
	 display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px !important;
}
#info .img {
  width: 120px;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}

@media screen and (min-width:1040px) {
 #info .reg {
	padding-left: 90px;
	padding-right: 60px;
}

#info .top-logo {
  margin-bottom: 60px !important;
}

#info .bottom-logo {
  margin-bottom: 40px !important;
}
}
@media screen and (max-width:1100px) {
 
#info .top-logo {
  margin-bottom: 50px !important;
  padding: 7px;
}
#info p {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 13px;

}
}

</style>
