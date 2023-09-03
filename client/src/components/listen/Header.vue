<template>
	<div class="navbar">
		<div class="container">
			<div class="search">
				<font-awesome-icon icon="fa-search" />
				<form @submit.prevent="handleSearch" class="form">
					<input
						autoComplete="off"
						type="text"
						id="search"
						placeholder="Search..."
						v-model="state.searchTerm" />
				</form>

				<font-awesome-icon
					icon="fa-times"
					class="cancel"
					v-if="state.isSearching"
					@click="state.searchTerm = ''" />

				<div v-if="state.searchResults.length > 0" class="searchResults">
					<SearchResult
						v-for="(video, index) in state.searchResults"
						:video="video"
						:key="index" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import SearchResult from './SearchResult.vue';

import axios from 'axios';

const state = reactive({
	searchTerm: '',
	isSearching: false,
	searchResults: []
});

watch(
	() => state.searchTerm,
	(newVal) => {
		if (newVal.length > 0) {
			state.isSearching = true;
		} else {
			state.isSearching = false;
		}
	}
);

function handleSearch() {
	state.searchResults = [];

	axios
		.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&videoCategoryId=10&q=${state.searchTerm}&key=AIzaSyAlcXVJxXstbawbfp9t5cE0ctdbMjFXWa8`
		)
		.then((res) => {
			state.searchResults = res.data.items.map((video) => {
				return {
					title: video.snippet.title,
					artist: video.snippet.channelTitle,
					videoId: video.id.videoId,
					thumbnail: video.snippet.thumbnails.default
				};
			});
		})
		.catch((e) => console.log(e));
}
</script>

<style scoped>
.navbar {
	position: absolute;
	font-family: 'Lato', sans-serif;
	font-weight: 800;
	z-index: 1;
	background-color: transparent;
	width: 90vw;
	height: 5em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	place-items: center;
	top: 1%;
	left: 50%;
	transform: translateX(-50%);
	padding: 0em 7%;
}

.navbar .overlay {
	position: absolute;
	left: -6vw;
	width: 100vw;
	height: 350vh;
	background-color: rgba(0, 0, 0, 0.486);
}

.navbar p,
.navbar label {
	font-weight: 600;
	font-size: 1.5em;
}

.navbar .container {
	width: 100%;
	display: flex;
	place-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: rgba(255, 255, 255, 0);
}

.navbar .container .together {
	padding-left: 1.5em;
}

.navbar .container .form {
	height: 100%;
	width: 100%;
}

.navbar .container .search {
	position: relative;
	height: 3.5rem;
	width: 35rem;
	display: flex;
	place-items: center;
	padding: 0 0.8em;
	border-radius: 5px;
	box-shadow: 0 0 0px 3px #f60e6f;
	background-color: #171416;
	font-size: 1.6em;
}

.navbar .container .search input {
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 0.8em;
	font-weight: 600;
	color: #eee;
	padding-left: 1.3em;
}

.navbar .container .search ::placeholder {
	font-family: 'Lato', sans-serif;
	font-weight: normal;
}

.navbar .container .search .cancel {
	opacity: 1;
	padding-left: 0.5em;
	cursor: pointer;
}

.navbar .container .search .searchResults {
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	height: fit-content;
	overflow-y: visible;
	box-shadow: 0 0px 0px 3px #f60e6f;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
</style>
