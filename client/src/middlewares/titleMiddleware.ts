export function setPageTitle(to: any, from: any, next: Function) {
	const pageTitle = to.matched.find((route) => route.meta.title);

	if (pageTitle) window.document.title = pageTitle.meta.title;

	next();
}
