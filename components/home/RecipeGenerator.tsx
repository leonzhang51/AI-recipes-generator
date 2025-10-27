// components/home/RecipeGenerator.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RecipeGenerator() {
	const [ingredients, setIngredients] = useState("");
	const [diet, setDiet] = useState("");
	const [cuisine, setCuisine] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const router = useRouter();

	const handleGenerate = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsGenerating(true);

		// Simulate API call
		setTimeout(() => {
			router.push(`/generate?ingredients=${encodeURIComponent(ingredients)}`);
			setIsGenerating(false);
		}, 1500);
	};

	return (
		<div className="card p-8">
			<form onSubmit={handleGenerate} className="space-y-6">
				<div>
					<label
						htmlFor="ingredients"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						What ingredients do you have? *
					</label>
					<textarea
						id="ingredients"
						value={ingredients}
						onChange={(e) => setIngredients(e.target.value)}
						placeholder="e.g., chicken, rice, tomatoes, garlic..."
						className="input-field h-32 resize-none"
						required
					/>
					<p className="text-sm text-gray-500 mt-1">
						Separate ingredients with commas
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="diet"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Dietary Preferences
						</label>
						<select
							id="diet"
							value={diet}
							onChange={(e) => setDiet(e.target.value)}
							className="input-field"
						>
							<option value="">Any diet</option>
							<option value="vegetarian">Vegetarian</option>
							<option value="vegan">Vegan</option>
							<option value="keto">Keto</option>
							<option value="gluten-free">Gluten-Free</option>
							<option value="dairy-free">Dairy-Free</option>
						</select>
					</div>

					<div>
						<label
							htmlFor="cuisine"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Cuisine Type
						</label>
						<select
							id="cuisine"
							value={cuisine}
							onChange={(e) => setCuisine(e.target.value)}
							className="input-field"
						>
							<option value="">Any cuisine</option>
							<option value="italian">Italian</option>
							<option value="mexican">Mexican</option>
							<option value="asian">Asian</option>
							<option value="mediterranean">Mediterranean</option>
							<option value="american">American</option>
							<option value="indian">Indian</option>
						</select>
					</div>
				</div>

				<button
					type="submit"
					disabled={isGenerating || !ingredients.trim()}
					className="w-full btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
				>
					{isGenerating ? (
						<span className="flex items-center justify-center">
							<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
							Generating Recipe...
						</span>
					) : (
						"Generate Recipe & Shopping List"
					)}
				</button>
			</form>
		</div>
	);
}
