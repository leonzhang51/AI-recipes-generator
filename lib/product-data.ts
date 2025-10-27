// lib/product-data.ts
import type {
	Filters,
	NutritionFacts,
	PLPResponse,
	Product,
	ProductDetail,
	ProductVariant,
	Review,
	SortOption,
	StoreAvailability,
} from "@/types/products";

export class ProductDataGenerator {
	private static categories = {
		dairy: ["Organic Valley", "Horizon", "Stonyfield", "Tillamook"],
		produce: ["Driscoll's", "Fresh Express", "Earthbound Farm", "Mann Packing"],
		pantry: ["Muir Glen", "Bob's Red Mill", "Barilla", "Annie's"],
		beverages: ["Kevita", "GT's", "San Pellegrino", "La Croix"],
		meat: ["Applegate", "ButcherBox", "Niman Ranch", "Bell & Evans"],
		seafood: ["Wild Planet", "Safe Catch", "Vital Choice", "Trident"],
	};

	private static stores: string[] = [
		"Walmart",
		"Target",
		"Kroger",
		"Whole Foods",
		"Costco",
		"Trader Joe's",
		"Safeway",
	];

	static generatePLPData(
		category: string,
		searchTerm: string,
		page: number = 1,
		pageSize: number = 20,
	): PLPResponse {
		const products: Product[] = Array.from(
			{ length: pageSize },
			(_, index: number) => {
				const basePrice: number = Math.random() * (15.99 - 2.99) + 2.99;
				const hasDiscount: boolean = Math.random() > 0.7;
				const categoryKey: string =
					ProductDataGenerator.getCategoryFromSearch(searchTerm) ||
					category ||
					"pantry";

				return {
					id: `prod_${Date.now()}_${index}`,
					name: ProductDataGenerator.generateProductName(
						categoryKey,
						searchTerm || "Product",
					),
					brand:
						ProductDataGenerator.categories[
							categoryKey as keyof typeof this.categories
						]?.[
							Math.floor(
								Math.random() *
									ProductDataGenerator.categories[
										categoryKey as keyof typeof this.categories
									].length,
							)
						] || "Generic",
					price: Math.round(basePrice * 100) / 100,
					originalPrice: hasDiscount
						? Math.round(basePrice * 1.3 * 100) / 100
						: undefined,
					imageUrl: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`,
					rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
					reviewCount: Math.floor(Math.random() * 1000) + 10,
					inStock: Math.random() > 0.2,
					category: categoryKey,
					badges: ProductDataGenerator.generateBadges(),
					unitSize: ProductDataGenerator.generateUnitSize(categoryKey),
					storeAvailability: ProductDataGenerator.generateStoreAvailability(3),
				};
			},
		);

		return {
			products,
			pagination: {
				page,
				pageSize,
				total: 150,
				totalPages: Math.ceil(150 / pageSize),
			},
			filters: ProductDataGenerator.generateFilters(category),
			sortOptions: ProductDataGenerator.generateSortOptions(),
		};
	}

	static generatePDPData(productId: string): ProductDetail {
		const categories: string[] = Object.keys(ProductDataGenerator.categories);
		const category: string =
			categories[Math.floor(Math.random() * categories.length)];
		const basePrice: number = Math.random() * (15.99 - 2.99) + 2.99;
		const hasDiscount: boolean = Math.random() > 0.7;

		const baseProduct: Product = {
			id: productId,
			name: ProductDataGenerator.generateProductName(category, "Product"),
			brand:
				ProductDataGenerator.categories[
					category as keyof typeof this.categories
				]?.[
					Math.floor(
						Math.random() *
							ProductDataGenerator.categories[
								category as keyof typeof this.categories
							].length,
					)
				] || "Generic",
			price: Math.round(basePrice * 100) / 100,
			originalPrice: hasDiscount
				? Math.round(basePrice * 1.3 * 100) / 100
				: undefined,
			imageUrl: `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`,
			rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
			reviewCount: Math.floor(Math.random() * 1000) + 10,
			inStock: Math.random() > 0.2,
			category,
			badges: ProductDataGenerator.generateBadges(),
			unitSize: ProductDataGenerator.generateUnitSize(category),
			storeAvailability: ProductDataGenerator.generateStoreAvailability(3),
		};

		return {
			...baseProduct,
			description: ProductDataGenerator.generateDescription(category),
			images: [
				`https://picsum.photos/600/600?random=${Math.floor(Math.random() * 1000)}`,
				`https://picsum.photos/600/600?random=${Math.floor(Math.random() * 1000)}`,
				`https://picsum.photos/600/600?random=${Math.floor(Math.random() * 1000)}`,
			],
			sku: `SKU-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
			upc: Math.random().toString().substring(2, 14),
			nutritionFacts: ProductDataGenerator.generateNutritionFacts(),
			ingredients: ProductDataGenerator.generateIngredients(),
			allergens: ProductDataGenerator.generateAllergens(),
			dietaryInfo: ProductDataGenerator.generateDietaryInfo(),
			storageInstructions: ProductDataGenerator.generateStorageInstructions(),
			countryOfOrigin: ProductDataGenerator.generateCountryOfOrigin(),
			storeAvailability: ProductDataGenerator.generateStoreAvailability(5),
			variants: ProductDataGenerator.generateVariants(baseProduct.price),
			reviews: ProductDataGenerator.generateReviews(),
		};
	}

	private static generateProductName(
		category: string,
		baseName: string,
	): string {
		const prefixes: { [key: string]: string[] } = {
			dairy: ["Organic", "Grass-Fed", "Premium", "Fresh"],
			produce: ["Organic", "Fresh", "Local", "Seasonal"],
			pantry: ["Artisanal", "Organic", "Premium", "Traditional"],
			beverages: ["Sparkling", "Craft", "Organic", "Cold-Pressed"],
			meat: ["Grass-Fed", "Organic", "Free-Range", "Premium"],
			seafood: ["Wild-Caught", "Sustainable", "Fresh", "Premium"],
		};

		const prefix: string =
			prefixes[category]?.[
				Math.floor(Math.random() * prefixes[category].length)
			] || "";
		return prefix ? `${prefix} ${baseName}` : baseName;
	}

	private static generateBadges(): string[] {
		const badges: string[] = [
			"Organic",
			"Non-GMO",
			"Gluten-Free",
			"Vegan",
			"Keto",
			"Low-Carb",
		];
		return badges.slice(0, Math.floor(Math.random() * 3) + 1);
	}

	private static generateUnitSize(category: string): string {
		const sizes: { [key: string]: string[] } = {
			dairy: ["16oz", "32oz", "1gal", "500g", "1lb"],
			produce: ["1lb", "2lb", "bunch", "each", "5lb"],
			pantry: ["15oz", "28oz", "5lb", "12 pack", "24oz"],
			beverages: ["12oz", "16oz", "1L", "6 pack", "12 pack"],
			meat: ["1lb", "2lb", "5lb", "package"],
			seafood: ["1lb", "2lb", "filet", "package"],
		};
		return (
			sizes[category]?.[Math.floor(Math.random() * sizes[category].length)] ||
			"1 unit"
		);
	}

	private static generateDescription(category: string): string {
		const descriptions: { [key: string]: string } = {
			dairy:
				"Premium quality dairy product sourced from trusted farms. Carefully processed to maintain freshness and nutritional value.",
			produce:
				"Fresh, flavorful produce harvested at peak ripeness. Perfect for your favorite recipes and healthy meals.",
			pantry:
				"High-quality pantry staple made with care. Essential for cooking and baking needs.",
			beverages:
				"Refreshing beverage crafted with quality ingredients. Perfect for any occasion.",
			meat: "Premium cut of meat, carefully selected and prepared for optimal flavor and tenderness.",
			seafood:
				"Fresh seafood sourced from sustainable fisheries. Perfect for healthy and delicious meals.",
		};
		return (
			descriptions[category] ||
			"High-quality product perfect for your cooking needs."
		);
	}

	private static generateNutritionFacts(): NutritionFacts {
		return {
			servingSize: "1 serving",
			calories: Math.floor(Math.random() * 400) + 50,
			totalFat: Math.floor(Math.random() * 30),
			saturatedFat: Math.floor(Math.random() * 10),
			cholesterol: Math.floor(Math.random() * 100),
			sodium: Math.floor(Math.random() * 500) + 50,
			totalCarbohydrates: Math.floor(Math.random() * 60) + 10,
			dietaryFiber: Math.floor(Math.random() * 10),
			sugars: Math.floor(Math.random() * 30),
			protein: Math.floor(Math.random() * 30) + 5,
		};
	}

	private static generateIngredients(): string {
		const ingredients: string[] = [
			"Organic Ingredients",
			"Natural Flavors",
			"Sea Salt",
			"Spices",
			"Citric Acid",
			"Vegetable Oil",
			"Water",
			"Natural Preservatives",
		];
		return ingredients.slice(0, Math.floor(Math.random() * 5) + 3).join(", ");
	}

	private static generateAllergens(): string[] {
		const allergens: string[] = [
			"Milk",
			"Soy",
			"Wheat",
			"Tree Nuts",
			"Shellfish",
		];
		return Math.random() > 0.7
			? [allergens[Math.floor(Math.random() * allergens.length)]]
			: ["None"];
	}

	private static generateDietaryInfo(): string[] {
		const diets: string[] = [
			"Vegetarian",
			"Vegan",
			"Gluten-Free",
			"Dairy-Free",
			"Keto-Friendly",
			"Paleo",
		];
		return diets.slice(0, Math.floor(Math.random() * 3) + 1);
	}

	private static generateStorageInstructions(): string {
		return "Store in a cool, dry place. Refrigerate after opening.";
	}

	private static generateCountryOfOrigin(): string {
		const countries: string[] = [
			"USA",
			"Italy",
			"Mexico",
			"Canada",
			"Spain",
			"France",
		];
		return countries[Math.floor(Math.random() * countries.length)];
	}

	private static generateStoreAvailability(count: number): StoreAvailability[] {
		const availableStores: string[] = [...ProductDataGenerator.stores]
			.sort(() => Math.random() - 0.5)
			.slice(0, count);

		return availableStores.map((store) => ({
			store,
			price: Math.round((Math.random() * (15.99 - 2.99) + 2.99) * 100) / 100,
			inStock: Math.random() > 0.3,
			deliveryAvailable: Math.random() > 0.2,
		}));
	}

	private static generateVariants(basePrice: number): ProductVariant[] {
		const sizes: string[] = ["Small", "Medium", "Large", "Family Size"];
		return sizes.map((size: string, index: number) => ({
			id: `var_${index}`,
			size,
			price: Math.round(basePrice * (0.8 + index * 0.3) * 100) / 100,
			inStock: Math.random() > 0.2,
		}));
	}

	private static generateReviews(): Review[] {
		return Array.from({ length: 5 }, (_, index: number) => ({
			id: `rev_${index}`,
			author: `Customer${index + 1}`,
			rating: Math.floor(Math.random() * 2) + 4,
			date: new Date(Date.now() - Math.random() * 31536000000)
				.toISOString()
				.split("T")[0],
			title: [
				"Great product!",
				"Excellent quality",
				"Will buy again",
				"Very satisfied",
				"Good value",
			][index],
			comment:
				"This product exceeded my expectations. The quality is outstanding and I would definitely purchase again.",
			verified: Math.random() > 0.3,
		}));
	}

	private static generateFilters(category: string): Filters {
		return {
			price: { min: 2.99, max: 15.99 },
			brands: ProductDataGenerator.categories[
				category as keyof typeof this.categories
			] || ["Generic"],
			rating: [1, 2, 3, 4, 5],
			dietary: ["Organic", "Gluten-Free", "Vegan", "Non-GMO"],
			availability: ["In Stock", "Out of Stock"],
		};
	}

	private static generateSortOptions(): SortOption[] {
		return [
			{ value: "price_asc", label: "Price: Low to High" },
			{ value: "price_desc", label: "Price: High to Low" },
			{ value: "rating", label: "Highest Rated" },
			{ value: "popular", label: "Most Popular" },
		];
	}

	private static getCategoryFromSearch(searchTerm: string): string {
		const term: string = searchTerm.toLowerCase();
		if (
			term.includes("milk") ||
			term.includes("cheese") ||
			term.includes("yogurt")
		)
			return "dairy";
		if (
			term.includes("tomato") ||
			term.includes("lettuce") ||
			term.includes("fruit")
		)
			return "produce";
		if (
			term.includes("pasta") ||
			term.includes("sauce") ||
			term.includes("rice")
		)
			return "pantry";
		if (
			term.includes("juice") ||
			term.includes("soda") ||
			term.includes("water")
		)
			return "beverages";
		if (
			term.includes("chicken") ||
			term.includes("beef") ||
			term.includes("pork")
		)
			return "meat";
		if (
			term.includes("fish") ||
			term.includes("shrimp") ||
			term.includes("salmon")
		)
			return "seafood";
		return "pantry";
	}
}
