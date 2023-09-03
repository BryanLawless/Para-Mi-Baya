import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Notifications from 'notiwind';
import router from './router/index.js';
import MasonryWall from '@yeger/vue-masonry-wall';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/stylesheets/normalize.css';
import '@/assets/stylesheets/base.css';

import {
	faLock,
	faUser,
	faTextHeight,
	faLink,
	faImage,
	faBars,
	faImages,
	faSpinner,
	faThumbsUp,
	faComment,
	faUpDown,
	faLeftRight,
	faXmark,
	faRightFromBracket,
	faEllipsisVertical,
	faMoon,
	faSun,
	faFilter,
	faSearch,
	faTimes
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faUser,
	faLock,
	faTextHeight,
	faLink,
	faImage,
	faBars,
	faImages,
	faSpinner,
	faThumbsUp,
	faComment,
	faUpDown,
	faLeftRight,
	faXmark,
	faRightFromBracket,
	faEllipsisVertical,
	faMoon,
	faSun,
	faFilter,
	faSearch,
	faTimes
);

const pinia = createPinia();

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(Notifications)
	.use(MasonryWall)
	.use(router)
	.use(pinia)
	.mount('#app');
