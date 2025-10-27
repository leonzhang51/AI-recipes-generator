// components/home/Testimonials.tsx
const testimonials = [
	{
		name: "Sarah Chen",
		role: "Home Cook",
		content:
			"RecipeGenius helped me turn my random pantry items into a delicious meal! The shopping list feature saved me so much time.",
		avatar: "👩‍🍳",
	},
	{
		name: "Mike Rodriguez",
		role: "Busy Parent",
		content:
			"As a parent with limited time, this app is a lifesaver. The AI generates kid-friendly recipes that my whole family loves.",
		avatar: "👨‍👩‍👧‍👦",
	},
	{
		name: "Emily Watson",
		role: "Health Enthusiast",
		content:
			"Finally, an app that understands my dietary needs! The keto recipes are amazing and the nutritional info is super helpful.",
		avatar: "💪",
	},
];

export function Testimonials() {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
					Loved by Home Cooks
				</h2>
				<p className="text-lg text-gray-600">
					See what our users are saying about their cooking experience
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<div
						key={testimonial.name}
						className="card p-6 animate-fade-in"
						style={{ animationDelay: `${index * 0.2}s` }}
					>
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
								{testimonial.avatar}
							</div>
							<div>
								<h4 className="font-semibold text-gray-900">
									{testimonial.name}
								</h4>
								<p className="text-gray-500 text-sm">{testimonial.role}</p>
							</div>
						</div>
						<p className="text-gray-600 italic">{`"${testimonial.content}"`}</p>
					</div>
				))}
			</div>
		</div>
	);
}
