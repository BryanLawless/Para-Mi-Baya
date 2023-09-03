<template>
	<div v-if="auth.isLoggedIn" class="flex min-h-screen items-center justify-center">
		Successfully logged in!
	</div>
	<div v-else class="flex min-h-screen items-center justify-center">
		<Landing />
	</div>
</template>

<script setup lang="ts">
import Landing from './Landing.vue';

import { notify } from 'notiwind';
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();

notify({
	title: "Warning",
	text: "Your image size is too large!",
	type: "warning",
	group: "foo",
});
</script>
