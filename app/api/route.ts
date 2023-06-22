import { NextRequest, NextResponse } from "next/server";
import * as inputs from "../../data/config.json";

export async function GET(request: NextRequest) {
	try {
		const data = inputs;

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
