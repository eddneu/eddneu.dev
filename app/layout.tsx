import "./globals.css";
import { NavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
	title: "Eddie Neumann",
	description: "Eddie Neumann",
};

const inter = Roboto_Mono({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body
				className={cn(
					"bg-background font-sans antialiased scroll-smooth no-scrollbar"
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<NavBar />
					{children}
					<TailwindIndicator />
				</ThemeProvider>
			</body>
		</html>
	);
}
