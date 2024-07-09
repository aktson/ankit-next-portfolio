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
		"Creative professional Front-End Developer, web designer, and freelancer based in Norway. Ankit Soni specializes in React, Next.js, TypeScript, and vanilla JavaScript. // Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
	keywords: [
		"ankit",
		"soni",
		"portfolio",
		"Ankit Soni",
		"oslo",
		"material ui",
		"web development",
		"frilanser",
		"freelancer",
		"javascript",
		"HTML",
		"SCSS",
		"CSS3",
		"React.js",
		"React",
		"Next.js",
		"Norge",
		"Norway",
		"web designer",
		"web utvikler",
		"front end developer",
		"front end utvikler",
		"Next",
	],
	openGraph: {
		title: "Ankit Soni | Front-end Utvikler",
		description:
			"Creative professional Front-End Developer, web designer, and freelancer based in Norway. Ankit Soni specializes in React, Next.js, TypeScript, and vanilla JavaScript. // Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
		url: "https://ankitsoni.dev",
		author: "Ankit Soni",
		type: "website",
		image: "https://ankitsoni.dev/image.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ankit Soni | Front-end Utvikler",
		description:
			"Creative professional Front-End Developer, web designer, and freelancer based in Norway. Ankit Soni specializes in React, Next.js, TypeScript, and vanilla JavaScript. // Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
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
		"description": "Creative professional Front-End Developer, web designer, and freelancer based in Norway. Ankit Soni specializes in React, Next.js, TypeScript, and vanilla JavaScript. // Kreativ profesjonell Front-End Utvikler, webdesigner og frilanser basert i Norge. Ankit Soni er spesialisert i React, Next.js, TypeScript og vanilje JavaScript.",
		"keywords": [
			"Front-End Developer",
			"Web Designer",
			"Freelancer",
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Norge",
			"Norway"
			"material ui"
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
