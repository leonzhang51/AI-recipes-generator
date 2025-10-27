// app/api/products/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { ProductDataGenerator } from "@/lib/product-data";
import type { APIResponse, PLPResponse } from "@/types/products";

export async function GET(
	request: NextRequest,
): Promise<NextResponse<APIResponse<PLPResponse>>> {
	const { searchParams } = new URL(request.url);
	const search = searchParams.get("search") || "";
	const category = searchParams.get("category") || "";
	const page = parseInt(searchParams.get("page") || "1", 10);
	const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);

	try {
		const data = ProductDataGenerator.generatePLPData(
			category,
			search,
			page,
			pageSize,
		);

		return NextResponse.json({
			success: true,
			data,
			search,
			category,
		});
	} catch (_error) {
		return NextResponse.json(
			{ success: false, error: "Failed to fetch products" },
			{ status: 500 },
		);
	}
}
