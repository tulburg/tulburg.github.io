<template>
	<div class="page">
		<div>
			<ul class="top-links">
				<li v-for="link in links">
					<a :href="link.href">{{ link.title }}</a>
				</li>
			</ul>
		</div>
		<div class="home-content">
			<transition name="fade" mode="out-in" appear="true">
				<div class="home-title">Walk in the highway</div>
			</transition>
			<div class="home-subtitle">move in the right direction</div>
			<div class="home-description">
				there's a time and place for <br/>
				for everything, when the time is right, <br/>
				everything works together for the<br/>
				better
			</div>
		</div>
		<div class="profile-box shadow">
			<img src="../assets/img/passport.png" />
		</div>
		<!-- <div class="home-box shadow"></div> -->
		<div class="page-2"></div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			links : [
				{ title:"blog", href:"/blog" },
				{ title: "contact me", href: "/contact" },
				{ title: "projects", href: "/projects"}
			]
		}
	}
}
</script>