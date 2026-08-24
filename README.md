# Next.js Hello API and MongoDB API

This repository contains the backend for three CSX4107 assignments.

## Endpoints

- `GET /api/hello` returns `{ "message": "hello world" }`
- `GET /api/test` verifies the MongoDB connection and returns the database status
- `POST /api/test` inserts a test document

## Run locally

1. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to a MongoDB Atlas connection string or a local MongoDB server.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000/api/hello` and `http://localhost:3000/api/test`.
