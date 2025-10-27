// components/ProductList.tsx
"use client";
import { useProducts } from "@/hooks/useProducts";

interface ProductListProps {
	searchTerm: string;
	category?: string;
}

export function ProductList({ searchTerm, category = "" }: ProductListProps) {
	const { data, loading, error } = useProducts(searchTerm, category);

	if (loading) return <div className="loading">Loading products...</div>;
	if (error) return <div className="error">Error: {error}</div>;
	if (!data?.products.length) return <div>No products found</div>;

	return (
		<div className="product-grid">
			{data.products.map((product) => (
				<div key={product.id} className="product-card">
					<img
						src={product.imageUrl}
						alt={product.name}
						className="product-image"
					/>
					<h3 className="product-name">{product.name}</h3>
					<p className="product-brand">{product.brand}</p>
					<div className="product-price">
						{product.originalPrice && (
							<span className="original-price">
								${product.originalPrice.toFixed(2)}
							</span>
						)}
						<span className="current-price">${product.price.toFixed(2)}</span>
					</div>
					<div className="product-rating">
						⭐ {product.rating} ({product.reviewCount})
					</div>
					<div className="product-badges">
						{product.badges.map((badge) => (
							<span key={badge} className="badge">
								{badge}
							</span>
						))}
					</div>
					<button type="button" className="add-to-cart-btn">
						Add to Cart
					</button>
				</div>
			))}
		</div>
	);
}
