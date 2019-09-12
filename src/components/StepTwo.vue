<template>
  <div class="container" id="form2">
    <div class="row text-center mt-4">
  <h2 class="col-lg-12 about">Source Of Income</h2>
    <p class="col-lg-12 desc">How do you currently make money?</p>
</div>
<ul class="nav nav-pills nav-justified mt-5 mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Business Owner</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Self Employed</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Employed</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <form class="mx-auto">
   <div class="form-group">
    <input class="form-control form-control-lg" type="text" placeholder="Company Name">
  </div>
   <div class="form-group">
    <input class="form-control form-control-lg" type="text" placeholder="Address">
  </div>
  <div class="row form-group">
    <div class="col">
      <input class="form-control form-control-lg" type="text" placeholder="Website">
    </div>
    <div class="col">
      <input class="form-control form-control-lg" type="text" placeholder="phone Number">
    </div>
  </div>
  <div class="form-group">
    <select class="form-control form-control-lg">
  <option selected="selected" class="grey_color">How long have you been in business?</option>
</select>
  </div>

  <div class="row form-group">
    <div class="col">
      <select class="form-control form-control-lg">
  <option>Monthly profit</option>
</select>
    </div>
    <div class="col">
      <select class="form-control form-control-lg">
  <option>Number of Employees</option>
</select>
    </div>
  </div>
  <div class="form-group veri">
     <label for="exampleInputEmail1">For verification</label>
    <input class="form-control form-control-lg" type="text" placeholder="Company registration number">
  </div>
</form>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
    </div>
</template>

<script>
export default {
  name: "StepTwo"
};
</script>

<style scoped>
#form2  form {
  margin-top: 20px;
  width: 600px;
}

#form2 .icon img {
  width: 80px;
}

#form2 .form-group {
  margin-top: 20px !important;
}

#form2 ul {
  width: 600px;
    margin: auto;
}
#form2 .veri {
  margin-top: 35px !important;
}
#form2 .form-group label {
  color: #F740AC;
}
::placeholder {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height */
color: #7D7D7D;
}

.grey_color {
    font-family: Roboto;
font-style: normal !important;
font-weight: normal !important;
font-size: 12px !important;
line-height: 14px !important;
color: #7D7D7D !important;
}


select option {  font-family: Roboto;
font-style: normal !important;
font-weight: normal !important;
font-size: 12px !important;
line-height: 14px !important;
color: #7D7D7D !important;
}
select option:first-child{
   font-family: Roboto;
font-style: normal !important;
font-weight: normal !important;
font-size: 12px !important;
line-height: 14px !important;
color: #7D7D7D !important;
}

input:focus {
  border-color: #F740AC;
}
.bootstrap-select .form-control:focus {
    outline: none !important;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}

.btn:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
}


.nav-pills .nav-link.active {
  background: #F740AC !important;
  color: #ffffff !important;
}

.nav-pills .nav-link {
  color:  #F740AC !important;
}
</style>
