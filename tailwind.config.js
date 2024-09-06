/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			"2xl": { max: "1600px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1025px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "821px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "432px" },
		},
	},
	plugins: [],
};
