<template>
	<div class="Home">
		<!-- <Header /> -->
		
<!-- 		<section class="menu">
			<div class="photo" v-on:mouseover="showDropUp = true" v-on:mouseleave="showDropUp = false">
				<img src="../assets/img/pics.jpg" alt="profile photo">
			</div>
			<svg width="100%" height="100%" viewBox="-1 -1 103 103">
        <circle cx="51" cy="51" r="49" :class="(showDropUp) ? 'active' : ''" />
    	</svg>
			<div :class="(showDropUp) ? 'active' : ''" class="dropup" v-on:mouseover="showDropUp = true" v-on:mouseleave="showDropUp = false">

			</div>
		</section> -->
		<section class="quotes">
			<div class="card" v-for="quote in quotes">
				<div class="content">
					<h1>{{ quote.quote }}</h1>
					<div class="details">
						<span class="date">{{ quote.date }}</span>
						<span class="tag">{{ quote.tag }}</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

	import { Header } from '@/components/sub';
	import json from '../../src/quotes.json';

	export default {
		name: 'Home',
		components: { Header },
		data() {
			return {
				showDropUp: false,
				links : [
					{ title: "boq", href: "/boq" },
					{ title:"blog", href:"/blog" },
					{ title: "contact me", href: "/contact" },
					{ title: "projects", href: "/projects"}
				],
				ready: false,
				quotes: []
			}
		},

		mounted(){
			this.quotes = json;
		}
	}
</script>