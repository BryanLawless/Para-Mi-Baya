module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				textWhite: "#FFFFFF",
				primary: "#e02b70",
				primaryHover: "#e33477",
				primaryInputBg: "#1a1718",
				primaryInputOutline: "#121011",
			},
		},
		container: { center: true },
	},
};