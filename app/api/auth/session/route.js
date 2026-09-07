import { NextResponse } from "next/server";

export async function GET(request) {
  const email = request.cookies.get("csx4107_auth")?.value;
  return NextResponse.json({ authenticated: Boolean(email), user: email ? { email: decodeURIComponent(email) } : null, cookie: email ? `csx4107_auth=${email}` : null }, { headers: corsHeaders() });
}
export function OPTIONS() { return new NextResponse(null, { status: 204, headers: corsHeaders() }); }
function corsHeaders() { return { "Access-Control-Allow-Origin": "http://localhost:5173", "Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Methods": "GET, OPTIONS" }; }
