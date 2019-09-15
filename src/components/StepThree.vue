<template>
  <div class="container" id="form3">
      <div class="row text-center mt-4">
  <h2 class="col-lg-12 about">Your Financial Goals</h2>
    <p class="col-lg-12 desc">We would love to learn about your goals so we can help you reach them</p>
</div>
    <div class="row">
 <form class="mx-auto">
  <div class="form-group">
    <input class="form-control form-control-lg" type="text" placeholder="How much would you like to make each month">
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
form {
  margin-top: 20px;
  width: 500px;
}

#form3 .icon img {
  width: 80px;
}

#form3 .form-group {
  margin-top: 20px !important;
}

.form-control:focus {
  border-color: #F740AC  !important;
  box-shadow: 0 0 5px rgb(218, 78, 171) !important;
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

</style>
