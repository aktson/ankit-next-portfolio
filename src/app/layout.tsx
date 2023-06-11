import "./styles/globals.css";

export const metadata = {
	title: "Ankit Soni | Front-end Utvikler",
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	icon: "/favicon.ico",
	url: "https://ankitsoni.dev",
	image: "../../public/images/ankitLightGray.jpg",
	author: "Ankit Soni",
	robots: "all",
	description:
		"professional freelance front-end developer or web designer. Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript based in Norway. Kreative profesjonell Front End Utvikler & web designer basert i Norge ",
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
			"professional freelance front-end developer or web designer. Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript based in Norway. Kreative profesjonell Front End Utvikler & web designer basert i Norge ",
		url: "https://ankitsoni.dev",
		image: "https://github.com/aktson/ankit-next-portfolio/blob/main/public/images/ankitLightGray.jpg",
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
			<body>
				<div id="myportal" />
				{children}
			</body>
		</html>
	);
}
