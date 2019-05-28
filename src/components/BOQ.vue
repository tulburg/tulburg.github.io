<template>
	<div class="BOQ">
		<Header />
		<section class="body">
			<div class="container">
				<section class="timeline">
					
				</section>
				<section class="callups">
					<div class="callup">
						The walls you build will someday become your prison
						<label class="tag">Leadership</label>
					</div>
				</section>
			</div>
		</section>
		
	</div>
</template>

<script>
	
	import { Header } from './sub/'

	export default {
		name: "BOQ",
		components: { Header },
		data() {
			return {

			}
		}
	}
</script>