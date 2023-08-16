<template>
	<!--<MasonryWall :items="state.photos" :column-width="300" :gap="16">
		<template #default="{ item }">
			<Card :url="item.imageUrl" />
		</template>
	</MasonryWall>-->
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Card from '@/components/Card.vue';

import request from '@/api/request';

const state = reactive({
	load: false,
	photos: [],
});

onMounted(async () => {
	state.photos = await getPhotos();
});

async function getPhotos(): Promise<any> {
	let { status, response } = await request('/photos', 'GET');

	return status == 200 ? response.data : [];
}
</script>

<style scoped></style>