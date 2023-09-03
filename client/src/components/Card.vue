<template>
	<div class="card">
		<div class="thumbnail">
			<img :src="props.url" class="img" loading="lazy" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		required: true
	}
});
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	animation: fromCenterWithFade 0.3s ease;
}

.card .thumbnail {
	overflow: hidden;
	border-radius: 6px;
	background-color: #fff;
	animation: backgroundChange 1.8s linear infinite;
}

.card .thumbnail:hover .img {
	filter: saturate(1.6);
	transition: all 0.3s ease;
	transform: scale(1.3);
}

.card .thumbnail .img {
	width: 100%;
	border-radius: 5px;
	filter: saturate(1);
	transition: all 0.3s ease;
	display: flex;
	min-height: 150px;
}

.card label {
	font-size: 13px;
	text-align: center;
	padding: 6px 0;
	padding-bottom: 0;
	font-weight: 500;
}

.card label .tag:not(:last-child)::after {
	content: ',';
}

.card label .tag:hover {
	text-decoration: underline;
	text-decoration-thickness: 2px;
	text-underline-offset: 2px;
}

.card .card-info {
	display: flex;
	justify-content: center;
}

.card .card-info li {
	list-style: none;
	padding: 0 5px;
	font-size: 13px;
}
</style>
