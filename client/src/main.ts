import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import MasonryWall from '@yeger/vue-masonry-wall';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/stylesheets/base.css';
import '@/assets/stylesheets/normalize.css';

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
	faFilter
} from '@fortawesome/free-solid-svg-icons';
import { faSquare, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
	faUser,
	faLock,
	faSquare,
	faTextHeight,
	faKeyboard,
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
	faGithub
);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(MasonryWall)
	.use(router)
	.mount('#app');
