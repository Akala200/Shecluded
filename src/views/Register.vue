<template>
  <section id="reg">
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
            <h1>Create Your Account</h1>
            <p>To apply for loan and funding</p>
            <form class="mt-5">
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      v-model="firstname"
                      placeholder="First name"
                      required
                      autofocus
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      v-model="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="phone"
                  class="form-control"
                  id="phone"
                  v-model="telephone"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  v-model="password"
                  placeholder="password"
                  required
                />
              </div>
              <div class="form-group">
                <button
                  type="button"
                  @click.prevent="register()"
                  class="btn btn-lg btn-block"
                >Register</button>
              </div>

              <div class="text-center">
                <p>
                  Already have an account?
                  <router-link to="/">
                    <span>Login</span>
                  </router-link>
                </p>
                <p
                  id="terms"
                >By clicking on signup, you agree to our term & conditions and privacy policy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        style="background: url(/img/background.png);height: 800px;"
        class="col d-none d-lg-block img"
      ></div>
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
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      password: "",
      isLoading: false,
      fullPage: true   
    };
  },
  components: {
    Loading
  },
  methods: {
    register: function() {
      this.isLoading = true;
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        telephone: this.telephone,
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
        .dispatch("register", data)
 .then((res) => { 
    setTimeout(() => {
              this.isLoading = false;
            }, 5000),
    status = res.status; 
   Toast.fire({
  type: 'success',
  title: res.data.message
}),
    this.$router.push("verify")
  })
  .catch((err) => {
    Toast.fire({
  type: 'error',
  title: err
})
  });
    }
  }
};
</script>
 
<style scoped>
#reg {
  width: inherit;
}
#reg h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: normal;
  font-weight: bolder;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
}
#reg button {
  height: 48px;
  background: #f740ac;
  border-radius: 4px;
  color: #ffffff;
}
#reg p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  color: #000000;
}
#reg p span {
  color: #f740ac;
}
#reg #terms {
  font-size: 13px !important;
}
#reg .img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#reg p a {
  text-decoration: none;
}
.form-control:focus {
  border-color: #f740ac !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}

@media screen and (min-width: 1040px) {
  #reg .reg {
    padding-left: 90px;
    padding-right: 60px;
  }
}
</style>
