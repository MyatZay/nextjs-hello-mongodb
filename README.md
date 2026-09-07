# Next.js Hello API and MongoDB API

This repository contains the backend for three CSX4107 assignments.

## Endpoints

- `GET /api/hello` returns `{ "message": "hello world" }`
- `GET /api/test` verifies the MongoDB connection and returns the database status
- `POST /api/test` inserts a test document
- `POST /api/auth/login` signs in the class-demo user and creates `csx4107_auth`
- `GET /api/auth/session` returns the current authenticated user and cookie value
- `POST /api/auth/logout` removes the authentication cookie

## Authentication demo

Run this backend on port 3000 and the companion frontend repository on port 5173.
Use `student@csx4107.local` with password `nextjs3`. The demonstration intentionally
uses a readable cookie so its value can be shown for the course requirement; a production
application should use secure, HttpOnly session cookies instead.

## Run locally

1. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to a MongoDB Atlas connection string or a local MongoDB server.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000/api/hello` and `http://localhost:3000/api/test`.
