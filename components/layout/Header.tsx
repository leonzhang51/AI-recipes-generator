// components/layout/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-lg">🍳</span>
						</div>
						<span className="text-xl font-bold text-gray-900">
							RecipeGenius
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-gray-700 hover:text-green-600 transition-colors font-medium"
						>
							Home
						</Link>
						<Link
							href="/recipes"
							className="text-gray-700 hover:text-green-600 transition-colors font-medium"
						>
							Recipes
						</Link>
						<Link
							href="/ingredients"
							className="text-gray-700 hover:text-green-600 transition-colors font-medium"
						>
							Ingredients
						</Link>
						<Link
							href="/shopping-list"
							className="text-gray-700 hover:text-green-600 transition-colors font-medium"
						>
							Shopping List
						</Link>
					</nav>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						<Link href="/generate" className="btn-primary">
							Generate Recipe
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						className="md:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className="w-6 h-6 flex flex-col justify-center space-y-1">
							<span
								className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
							/>
							<span
								className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
							/>
							<span
								className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
							/>
						</div>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
						<nav className="flex flex-col space-y-4">
							<Link
								href="/"
								className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/recipes"
								className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								Recipes
							</Link>
							<Link
								href="/ingredients"
								className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								Ingredients
							</Link>
							<Link
								href="/shopping-list"
								className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								Shopping List
							</Link>
							<div className="pt-4">
								<Link
									href="/generate"
									className="btn-primary w-full text-center block"
									onClick={() => setIsMenuOpen(false)}
								>
									Generate Recipe
								</Link>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
