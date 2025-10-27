// components/home/FeatureShowcase.tsx
const features = [
	{
		icon: "🤖",
		title: "AI-Powered Recipes",
		description:
			"Generate unique recipes based on your available ingredients and preferences using advanced AI.",
	},
	{
		icon: "🛒",
		title: "Smart Shopping Lists",
		description:
			"Get automatically generated shopping lists with prices and store availability for your recipes.",
	},
	{
		icon: "⚡",
		title: "Quick & Easy",
		description:
			"Create delicious meals in minutes without the hassle of searching through countless recipes.",
	},
	{
		icon: "🎯",
		title: "Personalized",
		description:
			"Customize recipes based on your dietary restrictions, cuisine preferences, and cooking skill level.",
	},
	{
		icon: "💰",
		title: "Budget-Friendly",
		description:
			"Save money by using ingredients you already have and finding the best deals for what you need.",
	},
	{
		icon: "❤️",
		title: "Healthy Options",
		description:
			"Discover nutritious recipes that fit your health goals and dietary requirements.",
	},
];

export function FeatureShowcase() {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
					Why Choose RecipeGenius?
				</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Our AI-powered platform makes cooking easier, faster, and more
					enjoyable than ever before.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<div
						key={feature.title}
						className="card p-6 text-center hover:scale-105 transition-transform duration-200 animate-fade-in"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="text-4xl mb-4">{feature.icon}</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-3">
							{feature.title}
						</h3>
						<p className="text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
