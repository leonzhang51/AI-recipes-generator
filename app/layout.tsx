// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RecipeGenius - AI-Powered Recipe Generator",
	description:
		"Generate delicious recipes and shopping lists based on your ideas",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
