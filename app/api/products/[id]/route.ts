// app/api/products/[id]/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { ProductDataGenerator } from "@/lib/product-data";
import type { APIResponse, ProductDetail } from "@/types/products";

interface RouteParams {
	params: {
		id: string;
	};
}

export async function GET(
	_request: NextRequest,
	{ params }: RouteParams,
): Promise<NextResponse<APIResponse<ProductDetail>>> {
	const { id } = params;

	try {
		const product = ProductDataGenerator.generatePDPData(id);

		return NextResponse.json({
			success: true,
			data: product,
		});
	} catch (_error) {
		return NextResponse.json(
			{ success: false, error: "Product not found" },
			{ status: 404 },
		);
	}
}
