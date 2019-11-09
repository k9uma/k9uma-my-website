<template>
	<b-container>
		<b-list-group v-for="post in posts" :key="post.id">
			<b-list-group-item>
				<b-row>
					<b-col lg="4">
						<b-img v-bind:src="post.thumbnail" height="200" width="200" fluid alt="Responsive image"></b-img>
					</b-col>
					<b-col>
						<h3>{{ post.title }}</h3>
						<b-card-text>
							<b-link target="_blank" :href="post.link">Listen</b-link> 
						</b-card-text>
					</b-col>
				</b-row>
			</b-list-group-item>
		</b-list-group>
	</b-container>
</template>

<script>
	import axios from "axios";

	export default {
		data() {
			return {
				posts: [],
				errors: []
			}
		},
		mounted() {
			axios
			.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2F7c2bddc%2Fpodcast%2Frss&api_key=omes63ygynlenuwsok4hq1yu5srfkzry1kk2tuu7&order_by=pubDate&order_dir=desc&count=50`)
			.then(response => {
				this.posts = response.data.items;
			})
			.catch(e => {
				this.errors.push(e);
			});
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
