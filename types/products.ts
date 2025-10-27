// types/product.ts
export interface Product {
	id: string;
	name: string;
	brand: string;
	price: number;
	originalPrice?: number;
	imageUrl: string;
	rating: number;
	reviewCount: number;
	inStock: boolean;
	category: string;
	badges: string[];
	unitSize: string;
	storeAvailability: StoreAvailability[];
}

export interface ProductDetail extends Product {
	description: string;
	images: string[];
	sku: string;
	upc: string;
	nutritionFacts: NutritionFacts;
	ingredients: string;
	allergens: string[];
	dietaryInfo: string[];
	storageInstructions: string;
	countryOfOrigin: string;
	variants: ProductVariant[];
	reviews: Review[];
}

export interface StoreAvailability {
	store: string;
	price: number;
	inStock: boolean;
	deliveryAvailable: boolean;
}

export interface NutritionFacts {
	servingSize: string;
	calories: number;
	totalFat: number;
	saturatedFat: number;
	cholesterol: number;
	sodium: number;
	totalCarbohydrates: number;
	dietaryFiber: number;
	sugars: number;
	protein: number;
}

export interface ProductVariant {
	id: string;
	size: string;
	price: number;
	inStock: boolean;
}

export interface Review {
	id: string;
	author: string;
	rating: number;
	date: string;
	title: string;
	comment: string;
	verified: boolean;
}

export interface PLPResponse {
	products: Product[];
	pagination: Pagination;
	filters: Filters;
	sortOptions: SortOption[];
}

export interface Pagination {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

export interface Filters {
	price: PriceRange;
	brands: string[];
	rating: number[];
	dietary: string[];
	availability: string[];
}

export interface PriceRange {
	min: number;
	max: number;
}

export interface SortOption {
	value: string;
	label: string;
}

export interface APIResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
	search?: string;
	category?: string;
}
