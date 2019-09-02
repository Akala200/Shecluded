<template>
  <section id="dashboard">
		<div class="container py-5">
			<div class="d-flex justify-content-between align-items-center mb-4 dash-pills">
				<h1 class="h1">Dashboard</h1>
				<div class="d-flex justify-content-between align-items-center">
					<p class="p2 pr-3 mt-3">Currency</p>
					<b-tabs v-model="tabIndex">
						<b-tab title="NGN" :title-link-class="linkClass(0)"></b-tab>
						<b-tab title="USD" :title-link-class="linkClass(1)"></b-tab>
						<b-tab title="JPA" :title-link-class="linkClass(2)"></b-tab>
						<b-tab title="ZAR" :title-link-class="linkClass(3)"></b-tab> 
					</b-tabs>
				</div>
			</div>
			<div class="d-flex justify-content-between dash1 mb-2">
				<div class="card px-5 pt-4 pb-2 bg-white card-one"> 
					<h3>Current Balance<br><span> Tuesday, 6th April 2019</span></h3>
					<h4 class="ml-md-5 md-sm-2" v-if="!!userBalance">{{userBalance.currency}}<span>{{userBalance.amount}}</span></h4>
					<p class="d-flex justify-content-between align-items-center mt-5"><span>08162113799</span><i class="far fa-user"></i></p>
				</div>
				<div class="card px-4 pb-2 bg-white card-two">  
					<div class="d-flex align-items-center">
						<div class="col-md-5" >
							<div class="progress" data-percentage="70">
								<span class="progress-left">
									<span class="progress-bar"></span>
								</span>
								<span class="progress-right">
									<span class="progress-bar"></span>
								</span>
								<div class="progress-value">
									<div>70%</div>
								</div>
							</div>  
 						</div>
						<div class="progress-details col-md-7 pl-5">
							<div class="row my-5">
								<div class="col-md-3"><img src="/img/dashboard-badge.png"> </div>
								<div class="col-md-9"><span>05 games played</span></div>
							</div>
							<p>Daily Overall number of games</p>
						</div> 
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-between mb-5">
				<div class="card-one-one">
					<div class="card px-5 py-4 mb-2">   
						<div class="d-flex justify-content-between align-items-center">
							<div class="wins">
								<h5>Number of<br>wins</h5>
								<h1 class="mt-5">68</h1>
							</div>
							<div class="wins_img"><img src="/img/wins.png"></div>
						</div>
					</div>
					<div class="card px-5 py-4">   
						<div class="d-flex justify-content-between align-items-center">
							<div class="wins">
								<h5>Number of<br>active games</h5>
								<h1 class="mt-5">02</h1>
							</div>
							<div><img src="/img/games.png"></div>
						</div>
					</div>
				</div>
				<div class="card bg-white card-two-two">  
					<img class="card bg-white card-two-two" src="/img/win-big.png">
				</div>
			</div>

			
			
		</div> 
	</section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	data() {
		return {
			tabIndex: 0,	  
		}
	},
	async mounted(){
		if(!this.userBalance){
			await this.getBalance()
		}

	},
	methods: {
		...mapActions(['getBalance','getSchedule']),
		linkClass(idx) {
			if (this.tabIndex === idx) {
				return ['pill-green', 'text-white']
			} else {
				return ['pill-default', 'text-black']
			}
		}
	},
	computed:{
		...mapState(['userBalance'])
	}
}
</script>
<style>
.pill-green { 
	background: #269A4C !important;
	margin-left:5px;
	padding:2px 15px; 
	border-radius:5px;
	background-image: url("/img/america.jpg");
}
ul { 
	border:none !important;
} 
.pill-default {
	border: 1.5px solid #E8E8E8 !important;
	margin-left:5px; 
	padding:2px 15px; 
	border-radius:5px;
	background: #fff;
}
@media screen and (max-width:600px) {
.pill-green,
.pill-default {
	padding:2px 5px;
	font-size: 12px;
}
}
</style>
<style lang="scss" scoped> 
#dashboard {
	background: #E5E5E5;
}
#dashboard h1 {
	font-size: 30px; 
	color: #333333; 
	font-weight:bold;
}
#dashboard p { 
	font-size: 20px; 
	color: #333333;
	font-weight:bold; 
}
#dashboard p i{ 
	font-size: 20px; 
	color: #666666; 
}
#dashboard h3 {
	font-size: 20px; 
	color: #333333; 
	font-weight: bold;
	line-height:22px;
}
#dashboard h3 span {
	font-size: 16px; 
	color: #666666; 
}
#dashboard h4 {
	font-size: 26px;
	color: #269A4C;
	font-style: normal;
}
#dashboard .result h4 { 
	color: #21703A; 
}
#dashboard h4 span{
	font-size: 50px;
	color: #269A4C; 
} 
#dashboard .card-one, 
#dashboard .card-two, 
#dashboard .card-one-one,
#dashboard .card-two-two{
	width:49.5%;
} 
#dashboard .completed-text {
	text-align:center!important;
} 
#dashboard img {
	height:50px;
	width:40px;
} 
#dashboard .progress-details span {
	color: #269A4C;
	font-size:26px;
	font-weight: bold;
	line-height: 26px;
}
#dashboard .progress-details p { 
	font-size:18px;
	color: #666666;
}
#dashboard .card-two-two img{ 
	background-size: cover;
	object-fit: cover;
	width:70%;
	height:70%;
} 
#dashboard .card-one-one img{
	width:110px;
	height:110px;
	background-size: cover;
	object-fit: cover;
	border-radius:50%;
}
#dashboard h5 {
	font-size: 25px;
	line-height: 33px;
	color: #666666;
	font-family: Circular Std;
	font-weight: bold;
}
#dashboard .wins h1 {
	font-size: 70px;
	line-height: normal;
	color: #269A4C;
	font-style: normal;
	font-weight:400;
	font-family: Graphik;
}
#dashboard .result .card {
	background: #EDF0F5;
	border-radius: 15px;
}
#dashboard .result .card .card{
	background: #F4F4F4;
	border-radius: 10px; 
} 
#dashboard .result {
	border-radius: 15px;
}
#dashboard .result h6 {
	color: #333333;
	font-size: 24px;
	font-weight:bold;
}

$borderWidth: 10px;
$animationTime: 1.5s;
$border-color-default: #D6E7DD;;
$border-color-fill: #269A4C;
$size: 100px; 
$howManySteps: 100; 

.progress {
  width: $size;
  height: $size;
  line-height: $size;
  background: none;
  margin: 0;
	padding:0;
  box-shadow: none;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: $borderWidth solid $border-color-default;
    position: absolute;
    top: 0;
    left: 0;
  }
  > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .progress-left {
    left: 0;
  }
  .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: $borderWidth;
    border-style: solid;
    position: absolute;
    top: 0;
    border-color: $border-color-fill;
  }
  .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: ($size/2);;
    border-bottom-right-radius: ($size/2);;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
    //animation: loading-2 1.5s linear forwards 1.8s;
  }
  .progress-right {
    right: 0;
    .progress-bar {
      left: -100%;
      border-top-left-radius: ($size/2);;
      border-bottom-left-radius: ($size/2);;
      border-right: 0;
      -webkit-transform-origin: center right;
      transform-origin: center right;
      //animation: loading-1 1.8s linear forwards;
    }
  }
  .progress-value {
    display: flex;
    border-radius: 50%;
		color: #666666;
    font-size: 28px; 
		position:absolute;
		bottom:25%;
		right:20%;  
    text-align: center!important;
    line-height: 20px;
    align-items: center; 
    justify-content: center right;
    height: 60%; 
    //font-family: $work-sans;
    font-weight: 600;
    div {
      margin-top: 10px;
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}
@for $i from 1 through $howManySteps {
	$stepName: ($i*(100 / $howManySteps));

	@if $i <= ($howManySteps/2) { 
		.progress[data-percentage="#{$stepName}"] {
			.progress-right .progress-bar {
				 animation: loading-#{$i} $animationTime linear forwards;
			}
			.progress-left .progress-bar {animation: 0;}
		}
	}
	//animation only the right side if above 50%
	@if $i > ($howManySteps/2)  {  
		.progress[data-percentage="#{$stepName}"] {
			.progress-right .progress-bar {
				animation: loading-#{($howManySteps/2)} $animationTime linear forwards; //set the animation to longest animation
			}
			.progress-left .progress-bar {
      animation: loading-#{$i - ($howManySteps/2)} $animationTime linear forwards $animationTime;
    }
		}
	}
}
//animation
@for $i from 1 through ($howManySteps/2) { 
	$degrees: (180/($howManySteps/2));
	$degrees: ($degrees*$i);
	@keyframes loading-#{$i}{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate($degrees);
			transform: rotate(#{$degrees}deg);
    }
	}
}
//additional styling
.progress {
		margin-bottom: 1em;
}
@media screen and (max-width:1040px) {
.h1 {
	display:block;
	width:100%;
	margin-top:30px;
}
#dashboard .card-one, 
#dashboard .card-two{
	width:100%;
}
#dashboard .card-one-one {
	width:100%;
}
#dashboard .card-two-two {
	display:none;
}
.dash1 {
	flex-direction:column;
}
#dashboard .card-one-one img{
	width:80px;
	height:80px;
}
#dashboard h5 {
	font-size: 16px; 
}
#dashboard .wins h1 {
	font-size: 50px;
}
#dashboard h1 {
	font-size: 20px;
}
#dashboard h4 {
	font-size: 20px; 
}
.dash-pills {
	flex-direction: column;
	text-align: left!important
}
.h1 {
	text-align: left;
	margin-left: 3%;
}
#dashboard .progress-details span { 
	font-size:18px;
}
#dashboard .progress-details p { 
	font-size:14px; 
}
#dashboard .result h6 {
	font-size: 14px; 
}
}
@media screen and (max-width:600px) {
#dashboard .progress-details img { 
	display: none;
}
#dashboard img {
	height:30px;
	width:27px;
} 
}
</style>
