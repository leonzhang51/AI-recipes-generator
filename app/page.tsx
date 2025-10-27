// app/page.tsx
import Link from "next/link";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { RecipeGenerator } from "@/components/home/RecipeGenerator";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-green-50 to-white py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
							Turn Your <span className="text-green-600">Food Ideas</span> into
							Perfect Recipes
						</h1>
						<p
							className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in"
							style={{ animationDelay: "0.2s" }}
						>
							AI-powered recipe generator that creates delicious meals and
							shopping lists based on your ingredients, diet, and preferences.
						</p>
						<div
							className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							<Link href="/generate" className="btn-primary text-lg px-8 py-4">
								🍳 Generate Recipe
							</Link>
							<Link href="/recipes" className="btn-secondary text-lg px-8 py-4">
								📚 Browse Recipes
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Recipe Generator */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Generate Your Perfect Recipe
							</h2>
							<p className="text-lg text-gray-600">
								{`Tell us what you have in mind, and we'll create a customized recipe with shopping list.`}
							</p>
						</div>
						<RecipeGenerator />
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<FeatureShowcase />
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<Testimonials />
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-green-600">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Ready to Cook Something Amazing?
					</h2>
					<p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
						Join thousands of home cooks who are creating delicious meals with
						AI assistance.
					</p>
					<Link
						href="/generate"
						className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
					>
						Start Cooking Now
					</Link>
				</div>
			</section>
		</div>
	);
}
