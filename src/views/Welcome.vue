<template>
  <section id="welcome">
    <div class="row">
      <div class="mx-auto mt-3 top-logo">
            <img class="justify-content-end" src="/img/logo.png" />
          </div>
    </div>
      <div class="row">
       <div class="mx-auto bottom-logo">
            <img class="justify-content-end img" src="/img/woman.png" />
          </div>
      </div>
      <div class="row">
       <div class="mx-auto text-center mt-3">
            <h3 class="welcome">Welcome To Shecluded Bisola</h3>
        </div>
      </div>
      <div class="row">
       <div class="mx-auto text-center mt-3">
            <p class="note">Before you can apply for loans we need to know a little bit more <br> about you. Kindly take your time to fill the form on the next page</p>
        </div>
      </div>
       <div class="row">
       <div class="mx-auto text-center mt-3">
           <button class="btn">Continue</button>
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
#welcome  {
  width: inherit;
}

#welcome button {
    height: 48px;
background: #F740AC;
border-radius: 4px;
color:#ffffff;
width: 200px;
}

#welcome p span {
	color: #F740AC !important;
	   text-decoration: none;

}

#welcome .welcome {
    font-weight: bolder;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 49px;

color: #141414;
}
#welcome .note {
    font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 28px;

color: #505050;
}
#welcome #terms {
		font-size: 13px !important;
}
#welcome .side-img {
	 display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px !important;
}
#welcome .img {
  width: 120px;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}

@media screen and (min-width:1040px) {
 #welcome .reg {
	padding-left: 90px;
	padding-right: 60px;
}

#welcome .top-logo {
  margin-bottom: 60px !important;
}

#welcome .bottom-logo {
  margin-bottom: 40px !important;
}
}
@media screen and (max-width:1100px) {
 
#welcome .top-logo {
  margin-bottom: 50px !important;
  padding: 7px;
}
#welcome p {
  padding-left: 50px !important;
  padding-right: 50px !important;
  font-size: 13px;

}
#welcome h3 {
  padding-left: 50px !important;
  padding-right: 50px !important;
  font-size: 13px;

}
}

</style>
