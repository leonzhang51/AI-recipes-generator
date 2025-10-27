// hooks/useProducts.ts
"use client";
import { useEffect, useState } from "react";
import type { APIResponse, PLPResponse, ProductDetail } from "@/types/products";

interface UseProductsResult {
	data: PLPResponse | null;
	loading: boolean;
	error: string | null;
}

interface UseProductDetailResult {
	product: ProductDetail | null;
	loading: boolean;
	error: string | null;
}

export function useProducts(
	searchTerm: string = "",
	category: string = "",
	page: number = 1,
): UseProductsResult {
	const [data, setData] = useState<PLPResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			try {
				setLoading(true);
				setError(null);

				const params = new URLSearchParams({
					search: searchTerm,
					category,
					page: page.toString(),
				});

				const response = await fetch(`/api/products?${params}`);
				const result: APIResponse<PLPResponse> = await response.json();

				if (result.success && result.data) {
					setData(result.data);
				} else {
					setError(result.error || "Failed to fetch products");
				}
			} catch (err) {
				setError("Failed to fetch products");
				console.error("Error fetching products:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [searchTerm, category, page]);

	return { data, loading, error };
}

export function useProductDetail(
	productId: string | null,
): UseProductDetailResult {
	const [product, setProduct] = useState<ProductDetail | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProduct = async (): Promise<void> => {
			if (!productId) {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				setError(null);

				const response = await fetch(`/api/products/${productId}`);
				const result: APIResponse<ProductDetail> = await response.json();

				if (result.success && result.data) {
					setProduct(result.data);
				} else {
					setError(result.error || "Product not found");
				}
			} catch (err) {
				setError("Failed to fetch product");
				console.error("Error fetching product:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [productId]);

	return { product, loading, error };
}
