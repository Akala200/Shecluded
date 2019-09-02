<template>
	<section id="auth">
	
	</section>
</template>

<script> 

</script>
 
<style scoped>
.grey-bg{
	background: #E5E5E5;
	height:110vh; 
}
.game-card { 
	width:32%;
}
.tables {
	width:46%;
}
h3 {
	font-family: Circular Std;
	font-size: 32px;
	line-height: normal;
	color: #333333;
	font-weight: bolder;
	letter-spacing:-2px;
}
p {
	font-family: Graphik;
	font-size: 20px;
	line-height: 42px;
	color: #666666;
}
.wrapper {
	height:70vh;  
	position:relative;
	overflow:hidden;
} 
#auth img { 
  object-fit: cover;
	height: 100%; 	
	width:100%;
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: -2;
} 
#auth .image_overlay:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; 
  position: absolute; 
  background: rgba(20, 0, 5, 0.7);      
  z-index: -1; 
} 
.row1 {
	background: #F4F4F4;
}
.row2 {
	background: #E5E5E5; 
}
td {
	border-top:10px solid #fff;
	font-family: Circular Std;
	font-size: 24px; 
	color: #333333;
}
th {
	font-family: Circular Std;
	font-size: 20px;
	line-height: 38px;
	color: #666666;
}
td:first-child {
	border-left-style: solid;
	border-top-left-radius: 10px; 
	border-bottom-left-radius: 10px;
}
td:last-child {
	border-right-style: solid;
	border-bottom-right-radius: 10px; 
	border-top-right-radius: 10px; 
}
.table-wrap {
	background: #fff;
	border-radius:10px; 
}
.sunday_draws {
	font-family: Circular Std;
	font-size: 20px; 
	color: #21703A;
	font-weight:bold;
}
@media screen and (max-width:1040px) {
.wrapper {
	height:50vh;
}
td,th {
	font-size: 16px;
}
.grey-bg{
	background: #E5E5E5;
	height:100%; 
} 
}
@media screen and (max-width:780px) {
.table-wrap {
	flex-direction: column;
}
td,th {
	font-size: 14px;
}
.tables {
	width:100%;
}
.games {
	flex-direction: column;
}
.game-card { 
	width:100%;
	margin-top: 1rem;
}
.sunday_draws {
	font-size: 16px;
}
}
</style>
