<template>
	<div class="app">
		<Header />
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/listen/Header.vue';
</script>

<style lang="css" scoped>
body {
	overflow: hidden;
	background-color: #303841;
	font-size: 16px;
}

@media screen and (max-width: 540px) {
	body {
		font-size: 0.85em;
	}
}

::-webkit-scrollbar {
	width: 0;
}

.app {
	height: 100vh;
	width: 100vw;
	color: #eee;
	overflow: hidden;
}

@media screen and (max-height: 720px) {
	.app {
		font-size: 0.9em;
	}

	.app .queue {
		height: 60vh;
	}
}

@media screen and (max-width: 1170px) {
	.app .main {
		flex-direction: column;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.app .main .queue {
		order: 0;
		margin-bottom: 10vh;
		margin-top: 10em;
		padding: 0 10vw;
	}
}

@media screen and (min-width: 1171px) {
	.app .main {
		flex-direction: row;
	}

	.app .main .queue {
		margin-top: 9em;
		padding: 0 5vw;
	}
}

.app .main {
	position: relative;
	height: 100%;
	width: 100%;
	background-color: #303841;
	display: flex;
	justify-content: space-between;
}

.app .main ::-webkit-scrollbar {
	width: 0.2em;
}

.app .main ::-webkit-scrollbar-track {
	background: #3a4750;
}

.app .main ::-webkit-scrollbar-thumb {
	background: #eee;
}

.app .main .queue {
	flex: 0 1 50vw;
}
</style>
