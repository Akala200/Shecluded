<template>
  <div class="container" id="form1">
    <div class="row text-center mt-4">
  <h2 class="col-lg-12 about">About You</h2>
    <p class="col-lg-12 desc">We would love to get to know a little more about you</p>
</div>
    <div class="row mt-4">
      <div class="mx-auto top-logo">
            <img class="profile" src="/img/face.png" />
          </div>
    </div>
    <div class="mx-auto mt-3">
            <h4 class="text-center">Bisola Coker</h4>
          </div>
    <div class="row">
 <form class="mx-auto">
  <div class="form-group">
   <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Tell us a little more you" rows="3"></textarea>
  </div>
  <div class="row form-group">
    <div class="col">
      <input type="tel" class="form-control" placeholder="09088783636">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="DOB">
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address">
  </div>
  <div class="form-group">
    <div class="row">
      <div class="col-3 icon">
                            <img src="img/form.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/form.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/form.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/form.png" />
                        </div>
    </div>
  </div>
</form>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne"
};
</script>

<style scoped>
#form form {
  margin-top: 20px;
  width: 500px;
}

#form1 .icon img {
  width: 80px;
}

#form1 .form-group {
  margin-top: 20px !important;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}


</style>
