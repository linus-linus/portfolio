<!-- @format -->

<template>
	<div
		class="collapse"
		id="collapseExample"></div>
	<nav class="navbar navbar-expand-lg sticky-top">
		<div class="container-fluid">
			<router-link
				class="nav-link nav-style-balloon"
				to="/"
				>👻
			</router-link>

			<button
				class="navbar-toggler test"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon test"></span>
			</button>
			<div
				class="collapse navbar-collapse"
				id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link
							class="nav-link nav-style nav-style-new"
							to="/cv"
							>CV</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link nav-style nav-style-new"
							to="/projects"
							>PROSJEKTER</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	setup() {},
};
</script>

<style scoped>
.nav-style-balloon {
	height: 2.4rem;
	font-size: 1.4rem;
	padding-right: 1rem;
	padding-left: 1rem;
	border-bottom: 1.2px solid white;
}

.nav-style-balloon:focus,
.nav-style-balloon:hover {
	color: #00967b;
	border-bottom: 1.2px solid #00967b;
}
.nav-style-new {
	height: 2.4rem;
	color: black;
	font-weight: 400;
	font-size: 1rem;
	margin-left: 0.5rem;
	margin-right: 0.5px;
	border-bottom: 1.2px solid white;
	letter-spacing: 3px;
}
.nav-style-new:hover,
.nav-style-new:focus {
	color: #00967b;
	border-bottom: 1.2px solid #00967b;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
	outline: none;
	box-shadow: none;
	border: none;
}
/*Ipad */
@media screen and (max-width: 991px) {
	.nav-style-new {
		padding-left: 1rem;
	}
}
</style>
