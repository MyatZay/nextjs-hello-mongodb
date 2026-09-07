import { NextResponse } from "next/server";

const allowedUser = { email: "student@csx4107.local", password: "nextjs3" };

export async function POST(request) {
  const { email, password } = await request.json();
  if (email !== allowedUser.email || password !== allowedUser.password) {
    return NextResponse.json({ authenticated: false, message: "Invalid email or password" }, { status: 401, headers: corsHeaders() });
  }

  const response = NextResponse.json({ authenticated: true, user: { email }, message: "Login successful" }, { headers: corsHeaders() });
  response.cookies.set("csx4107_auth", encodeURIComponent(email), {
    httpOnly: false, sameSite: "lax", path: "/", maxAge: 60 * 60,
  });
  return response;
}

export function OPTIONS() { return new NextResponse(null, { status: 204, headers: corsHeaders() }); }
function corsHeaders() { return { "Access-Control-Allow-Origin": "http://localhost:5173", "Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "GET, POST, OPTIONS" }; }
