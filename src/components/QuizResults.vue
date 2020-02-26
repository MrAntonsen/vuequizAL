<template>
	<footer class="footer page-footer text-center blue">
		<progress :value="numTotal" max="10" />
		<!-- Copyright -->
		<div class="footer-copyright text-center">
			© 2020 Copyright:
			<a href="https://mdbootstrap.com/"> MrAntonsen</a>
		</div>
		<div class="result">
			<span>{{ numTotal }}</span
			>/ <b>10</b>
		</div>
		<!-- Copyright -->
	</footer>
</template>

<script>
export default {
	props: {
		numTotal: Number
	}
};
</script>

<style>
.page-footer {
	position: absolute;
	bottom: 0;
	height: 5rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	background: linear-gradient(to right, rgb(229, 255, 251), rgb(187, 255, 245));
	border-top: 2px solid lightseagreen;
}
.result {
	font-size: 3rem;
}
progress {
	position: fixed;
	width: 80%;
	height: 3rem;
	margin-top: -3rem;
	background: linear-gradient(to left, rgb(246, 255, 246), rgb(56, 250, 72));
}
</style>
