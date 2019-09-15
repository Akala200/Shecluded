<template>
  <div id="app">
     <div class="row head">
      <div class="mx-auto top-logo">
            <img class="justify-content-end" src="/img/logo.png" />
          </div>
    </div>
    <div class="container">
    <step-progression class="icon"
      :steps="steps"
      :currentStep="currentStep"
      :currentStepColor="currentStepColor"
      :defaultColor="defaultColor"
    />

    <div class="row">
    <step-one v-if="currentStep === 1" />
    <step-two v-if="currentStep === 2" />
    <step-three v-if="currentStep === 3" />
    <step-four v-if="currentStep === 4" />

    <button
      v-if="currentStep < steps"
      @click="increaseStep(currentStep, steps);"
      class="btn button mx-auto mt-3"
      type="button"
    >
     NEXT
    </button>
  
    <div class="container" id="form4" v-else>
      <div class="row text-center mt-4">
  <h2 class="col-lg-12 about">Card Verification</h2>
    <p class="col-lg-12 desc">How do you currently make money?</p>
</div>
    <div class="row">
 <div class="mx-auto text-center">
   <h1 class="card-text">Great! Add your Card Details.</h1>
</div>
    </div>

     <div class="row pl-5 pr-5">
 <div class="mx-auto text-center">
   <p class="mt-5 pl-5 pr-5 p">To validate your card, a non - refundable charge of N100 <br> needs to be processed to verify your card.</p>
</div>
    </div>
     <div class="row pl-5 pr-5">
 <div class="mx-auto text-center">
   <p class="mt-3 pl-5 pr-5 p">Having issues adding your card? please contact us right away</p>
</div>
    </div>
    
        <div class="row pl-5 pr-5 mt-5">
 <div class="mx-auto text-center">
 <button
      class="btn button-card mx-auto mt-3"
      type="button"
    >
     add card
    </button>
</div>
    </div>

    <div class="row pl-5 pr-5 mt-4">
 <div class="mx-auto text-center">
 <input class="form-control form-control-lg" type="text" placeholder="Secured By Paystack" readonly>
</div>
    </div>

  </div>
    </div>
  </div>
</div>
</template>

<script>
import StepProgression from "vue-step-progression";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo.vue";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour.vue";



export default {
  name: "App",
  components: {
    StepProgression,
    StepOne,
    StepTwo,
    StepThree
  },
  // define data on parent component and pass to the StepProgression component
  data() {
    return {
      steps: 4,
      currentStep: StepProgression.props.currentStep.default,
      currentStepColor: '#F740AC',
      defaultColor: 'gray'
    };
  },
  methods: {
    increaseStep(currentStep, steps) {
      if (currentStep < steps) {
        this.currentStep++;
      } else {
        return;
      }
    }
  }
};
</script>

<style>
#app {
  padding: 25px;
}

.continue {
  margin-top: 50px;
}

.success {
  margin-top: 100px;
  text-align: center;
color: #F740AC;
}

.about{
  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 41px;
color: #F740AC;
}

.desc {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height */
color: #000000;
}

.profile {
  width: 80px;
}

.icon {
  width: 300px;
  margin: auto;
}

.step {
  height: 26px !important;
    width: 26px !important;
}

.step-progression-line {
  background-color: #F740AC !important;
}

.button {
    height: 48px;
    width: 500px;
	background: #F740AC;
    border-radius: 4px;
	color:#ffffff;
}


.button-card {
    height: 48px;
    width: 200px;
	background: #F740AC;
    border-radius: 4px;
	color:#ffffff;
font-style: normal;
font-weight: 500;
line-height: 14px;
}

.head {
  margin-bottom: 20px;
}

form {
  margin-top: 20px;
  width: 500px;
}

#form4 .icon img {
  width: 80px;
}

#form4 .form-group {
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
font-size: 16px;
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
.btn:hover {
  color: #F740AC;
  background-color: #ffffff;
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

.card-text {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
margin-top: 40px;
color: #141414;
}

.p {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #141414;
}

</style>
