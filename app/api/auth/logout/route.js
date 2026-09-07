import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ authenticated: false, message: "Logged out; authentication cookie removed" }, { headers: corsHeaders() });
  response.cookies.set("csx4107_auth", "", { path: "/", maxAge: 0 });
  return response;
}
export function OPTIONS() { return new NextResponse(null, { status: 204, headers: corsHeaders() }); }
function corsHeaders() { return { "Access-Control-Allow-Origin": "http://localhost:5173", "Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "POST, OPTIONS" }; }
