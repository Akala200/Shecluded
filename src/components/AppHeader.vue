  
<template>
	<header id="play-header">
    <nav class="d-flex justify-content-between container align-items-center pt-1">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        
      </router-link>
      <ul class="d-flex justify-content-end align-items-center container pt-md-4">
        <li class="about_us">
            <router-link class="px-md-3" to="/"> Contact Us
          </router-link>         
        </li>
      </ul> 
    </nav>
</header>
</template>
 

<style scoped>
ul li {
	list-style:none;
}
ul li:hover,
ul li:active {
	border-bottom: 5px solid #fff; 
}
ul li a {
	font-family: Circular Std;
	font-size: 20px;
	line-height: normal;
	color: #ffffff; 
}
ul li a:hover,
ul li a:active {
	text-decoration: none; 
}
button {
	color:  white;
	background-color: #808080;
  padding:.2rem .5rem .3rem .5rem;
  font-size: 14px;
}
button:hover {
	color: rgb(201, 238, 213);
}
#play-header {
  background: #808080;
}
@media screen and (max-width:1040px) {  
.about_us {
	min-width:80px!important;
} 
ul li {
	margin-right:15px; 
}
.btn1 {
  margin-right:10px;
}
ul li a {
	font-size: 16px;
  margin:0;
  padding:0;
}
.navbar-brand img {
  width:8rem;
  height:25px;
  margin-right:0!important;
}
button { 
  padding:.2rem .4rem .2rem .4rem;
  font-size: 12px;
}
}
@media screen and (max-width:600px) {
ul li:hover {
	border-bottom: 2px solid #fff; 
}
ul li:active {
	border-bottom: none!important; 
}
.about_us {
	min-width:55px!important;
}
.about_us i {
	display:none!important;
}
ul {
	margin-top:15px!important;
}
ul li {
	margin-right:5px;
  padding:0!important;
}
.btn1 {
  margin-right:5px;
}
ul li a {
	font-size: 12px;
  margin:0;
  padding:0;
}
.navbar-brand img {
  width:4rem;
  height:15px;
  margin-right:0!important;
}
button { 
  padding:.1rem .2rem .1rem .2rem;
  font-size: 8px;
}
.about_us {
	min-width:45px!important;
}
}
@media screen and (max-width:370px) {
.navbar-brand img {
  width:3rem;
  height:15px;
}

}

@media screen and (max-width: 600px) {
 #play-header ul li a{
   font-size: 11px !important;
 }
}
</style>

<script> 

</script>
