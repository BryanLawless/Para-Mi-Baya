<template>
	<div class="searchResult">
		<div class="container">
			<p>{{ props.video.title }}</p>
			<p>{{ props.video.artist }}</p>
		</div>
		<img :src="props.video.thumbnail.url" alt="thumbnail" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	video: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.searchResult {
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	background-color: #171416;
	border-bottom: 2px solid #171416;
	width: 100%;
	font-size: 0.6em;
	font-weight: 400;
	padding: 3% 8%;
}

.searchResult .container {
	overflow: hidden;
}

.searchResult .container :nth-child(2) {
	font-weight: 300;
}

.searchResult .container p {
	padding-right: 1em;
	padding-top: 0.3em;
}

.searchResult img {
	width: 6em;
	height: 4em;
	object-fit: none;
	border-radius: 5px;
	border-radius: 7px;
}
</style>
