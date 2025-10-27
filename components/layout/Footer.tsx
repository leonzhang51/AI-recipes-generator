// components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-50 border-t border-gray-200">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="col-span-1 md:col-span-2">
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">🍳</span>
							</div>
							<span className="text-lg font-bold text-gray-900">
								RecipeGenius
							</span>
						</Link>
						<p className="text-gray-600 max-w-md">
							AI-powered recipe generator that helps you create delicious meals
							and smart shopping lists based on your ingredients and
							preferences.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/recipes"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Browse Recipes
								</Link>
							</li>
							<li>
								<Link
									href="/generate"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Generate Recipe
								</Link>
							</li>
							<li>
								<Link
									href="/shopping-list"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Shopping List
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Support</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-gray-600 hover:text-green-600 transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-500 text-sm">
						© 2024 RecipeGenius. All rights reserved.
					</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<span className="text-gray-500 text-sm">
							Made with ❤️ for food lovers
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
