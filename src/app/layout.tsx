import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import { ThemeProvider } from "next-themes";
import { Manrope, Marcellus } from "next/font/google";
import "../styles/globals.css";
import { JsonLd } from "@/components/JsonLd";
import { generateBaseMetadata } from "@/lib/metadata";
import { generateWebsiteSchema } from "@/lib/metadata";

const manrope = Manrope({
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-manrope",
	subsets: ["latin"],
});

const marcellus = Marcellus({
	weight: "400",
	variable: "--font-marcellus",
	subsets: ["latin"],
});

export const metadata = generateBaseMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const websiteSchema = generateWebsiteSchema();

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${manrope.className} ${marcellus.variable} antialiased`}
			>
				<JsonLd data={websiteSchema} id="website-schema" />

				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NavBar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
