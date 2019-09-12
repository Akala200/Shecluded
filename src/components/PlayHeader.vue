<template>
	<header id="play-header">
		<ul class="d-flex justify-content-start align-items-center container my-0">
			<li class="pl-5 py-md-3 py-sm-3 pr-md-4">
					<router-link to="/"> Home
				</router-link>
			</li>
			<li class="pr-md-4 py-md-3 py-sm-3">
					<router-link to="/wallet"> My Wallet
				</router-link>
			</li>
			<li class="pr-md-4 py-md-3 py-sm-3">
					<router-link to="/dashboard"> Dashboard
				</router-link>
			</li>
			<li>
			  <router-link class="pr-md-4 py-md-3 py-sm-3" to="/result">Result
              </router-link>
			</li>
			<li class="pr-md-4 py-md-3 py-sm-3">
					<router-link to="/media"> Media
				</router-link>
			</li>
				<li class="pr-md-4 py-md-3 py-sm-3">
					<router-link to="/about"> About Us
				</router-link>
			</li>
		</ul>
		<span @click="$emit('toggle')" class="menu-bar"><i class="fas fa-bars"></i></span>
	</header>
</template>

<script>
export default {
}
</script>
<style>
.menu-bar{
	display: none;
}
</style>
<style scoped>
#play-header {
	background: #FFFFFF;
}
}
@media screen and (max-width:1040px) {
ul li a {
	font-size: 14px;
}
}
@media screen and (max-width:760px) {
.menu-bar{
display: block;
position: absolute;
  top: 0;
  margin-left: 10px;
  cursor: pointer;
	z-index: 4;
}
ul li a {
	font-size: 10px;
	margin-right:1rem;
}
ul li i {
	display:none;
}
ul {
	padding-bottom:2rem;
}
ul li:hover,
ul li:active {
	border-bottom: 2px solid #269A4C;
}
}
</style>
