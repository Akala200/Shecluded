  
<template>
  <section id="dashboard">
    <nav class="nav justify-content-center" id="play-header">
      <h1 class="ml-auto pt-3">Shecluded</h1>
      <button class="btn ml-auto logout-button">LOGOUT</button>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="card mini-card" style="width: 18rem;">
            <img src="img/avatar2.png" class="card-img-top rounded-circle mx-auto mt-5" alt="..." />
            <h4 class="text-center mt-4">Adesanya Johnson</h4>
            <div class="card-body">
              <p
                class="card-text text-center"
              >I am a business woman building a fashion brand and empowering young fashion entreprenuers.</p>
              <div class="row pl-4 pr-4">
                <div class="col-3 icon">
                  <img src="img/blank.png" />
                </div>
                <div class="col-3 icon">
                  <img src="img/blank.png" />
                </div>
                <div class="col-3 icon">
                  <img src="img/blank.png" />
                </div>
                <div class="col-3 icon">
                  <img src="img/blank.png" />
                </div>
              </div>
            </div>
          </div>
            <div class="card card2 mt-4">
            <div class="card-body">
              <div class="row">
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10">
            <div class="row">
                <div class="row">
                    <div class="d-flex"></div>
                </div>
                <div class="row"></div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
 

<style scoped>
#dashboard {
  background-color: #e5e5e5 !important;
}

#dashboard .rounded-circle {
  width: 200px !important;
}
#dashboard ul li {
  list-style: none;
}
ul li:hover,
ul li:active {
  border-bottom: 5px solid #fff;
}
#dashboard ul li a {
  font-family: Circular Std;
  font-size: 20px;
  line-height: normal;
  color: #f740ac;
}
#dashboard ul li a:hover,
ul li a:active {
  text-decoration: none;
}
#dashboard button {
  color: white;
  background-color: #808080;
  padding: 0.2rem 0.5rem 0.3rem 0.5rem;
  font-size: 14px;
}
#dashboard button:hover {
  color: rgb(201, 238, 213);
}
#dashboard #play-header {
  background: #ffffff;
  color: #f740ac;
}
.logout-button {
  width: 150px !important;
  height: 60px !important;
  border-radius: 0 !important;
}
#dashboard .mini-card {
  margin-top: 100px;
}
#dashboard h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
}
#dashboard .card-text {
  color: #535353;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
#dashboard .icon {
  width: 50px !important;
}
#dashboard .card2 {
   min-width: 290px;
   height: 50px;
    background: #F740AC;
}
@media screen and (max-width: 1040px) {
  .about_us {
    min-width: 80px !important;
  }
  ul li {
    margin-right: 15px;
  }
  .btn1 {
    margin-right: 10px;
  }
  ul li a {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  .navbar-brand img {
    width: 8rem;
    height: 25px;
    margin-right: 0 !important;
  }
  button {
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    font-size: 12px;
  }
}
@media screen and (max-width: 600px) {
  ul li:hover {
    border-bottom: 2px solid #fff;
  }
  ul li:active {
    border-bottom: none !important;
  }
  .about_us {
    min-width: 55px !important;
  }
  .about_us i {
    display: none !important;
  }
  ul {
    margin-top: 15px !important;
  }
  ul li {
    margin-right: 5px;
    padding: 0 !important;
  }
  .btn1 {
    margin-right: 5px;
  }
  ul li a {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
  .navbar-brand img {
    width: 4rem;
    height: 15px;
    margin-right: 0 !important;
  }
  button {
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
    font-size: 8px;
  }
  .about_us {
    min-width: 45px !important;
  }
}
@media screen and (max-width: 370px) {
  .navbar-brand img {
    width: 3rem;
    height: 15px;
  }
}

@media screen and (max-width: 600px) {
  #play-header ul li a {
    font-size: 11px !important;
  }
}
</style>

<script>
</script>
