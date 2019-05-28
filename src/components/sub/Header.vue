<template>
	<header>
		<div class="container">
			<ul class="top-links">
				<li v-for="link in links">
					<a :href="link.href">{{ link.title }}</a>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data() { 
			return {
				links : [
					{ title: "boq", href: "/boq" },
					{ title:"blog", href:"/blog" },
					{ title: "contact me", href: "/contact" },
					{ title: "projects", href: "/projects"}
				]
			} 
		}
	}
</script>