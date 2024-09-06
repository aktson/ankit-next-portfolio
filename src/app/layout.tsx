import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./styles/globals.css";

export const metadata = {
	title: "Ankit Soni | Front-end Utvikler",
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	icon: "/favicon.ico",
	url: "https://ankitsoni.dev",
	image: "https://ankitsoni.dev/image.jpg",
	author: "Ankit Soni",
	robots: "index, follow",
	description:
		"Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
	keywords: [
		"ankit soni portfolio",
		"ankit soni developer",
		"oslo front-end developer",
		"norway web developer",
		"web designer norway",
		"freelance developer oslo",
		"react js developer norway",
		"front-end freelance developer",
		"next.js developer",
		"UI/UX designer norway",
		"javascript developer",
		"typescript developer",
		"responsive web design expert",
		"custom web application developer",
		"web design services norway",
		"freelance front-end developer",
		"fast and modern websites norway",
		"creative web developer norway",
		"ankit", "soni"
	],
	openGraph: {
		title: "Ankit Soni | Front-end Utvikler",
		description:
			"Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
		url: "https://ankitsoni.dev",
		author: "Ankit Soni",
		type: "website",
		image: "https://ankitsoni.dev/image.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ankit Soni | Front-end Utvikler",
		description:
			"Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
		image: "https://ankitsoni.dev/image.jpg",
	},
	googleBot: {
		index: true,
		follow: true,
	},
	themeColor: "#000000",
	structuredData: {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ankit Soni",
		"url": "https://ankitsoni.dev",
		"image": "https://ankitsoni.dev/image.jpg",
		"jobTitle": "Front-End Developer",
		"worksFor": {
			"@type": "Organization",
			"name": "Freelancer"
		},
		"sameAs": [
			"https://www.linkedin.com/in/ankit-soni",
			"https://github.com/ankitsoni"
		],
		"description": "Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
		"keywords": [
			"ankit soni portfolio",
			"ankit soni developer",
			"oslo front-end developer",
			"norway web developer",
			"web designer norway",
			"freelance developer oslo",
			"react js developer norway",
			"front-end freelance developer",
			"next.js developer",
			"UI/UX designer norway",
			"javascript developer",
			"typescript developer",
			"responsive web design expert",
			"custom web application developer",
			"web design services norway",
			"freelance front-end developer",
			"fast and modern websites norway",
			"creative web developer norway",
			"ankit", "soni"
		]
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="dark">
			<GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID!} />
			<body>
				<div id="myportal" />
				{children}
			</body>
		</html>
	);
}
