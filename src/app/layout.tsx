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
	image: [
		"../../public/images/ankitLightGray.jpg",
		"https://github.com/aktson/ankit-next-portfolio/blob/main/public/images/ankitLightGray.jpg",
		"https://github.com/aktson/ankit-next-portfolio/blob/main/public/images/ankit.jpg",
	],
	author: "Ankit Soni",
	robots: "all",
	description:
		"Kreative profesjonell Front-End Utvikler,  web designer og frilanser basert i Norge. Professional  front-end developer, web designer and freelancer based in Norway. Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript based in Norway.",
	keywords: [
		"ankit",
		"soni",
		"portfolio",
		"Ankit Soni",
		"oslo",
		"web development",
		"frilanser",
		"freelancer",
		"javascript",
		"HTML",
		"SCSS",
		"CSS3",
		"react.Js",
		"react",
		"next.Js",
		"norge",
		"norway",
		"web designer",
		"web utvikler",
		"front end developer",
		"front end utvikler",
	],
	openGraph: {
		title: "Ankit Soni | Front-end Utvikler",
		description:
			"Kreative profesjonell Front-End Utvikler,  web designer og frilanser basert i Norge. Professional front-end developer, web designer and freelancer based in Norway. Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript based in Norway.",
		url: "https://ankitsoni.dev",
		image: [
			"../../public/images/ankitLightGray.jpg",
			"https://github.com/aktson/ankit-next-portfolio/blob/main/public/images/ankitLightGray.jpg",
			"https://github.com/aktson/ankit-next-portfolio/blob/main/public/images/ankit.jpg",
		],
		author: "Ankit Soni",
		type: "website",
	},
	googleBot: {
		index: true,
		follow: false,
	},
	themeColor: "dark",
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
