# ProMeet - Full-Stack Enterprise Meeting Application

This is a production-quality, full-stack video conferencing application built with Next.js, Node.js/Express, Supabase, and LiveKit.

## Architecture

- **Frontend**: Next.js 15 (App Router), Tailwind CSS v4, React, LiveKit Components.
- **Backend**: Node.js, Express, TypeScript, LiveKit Server SDK.
- **Auth & Database**: Supabase (PostgreSQL + GoTrue).
- **Video Communication**: LiveKit.

## Setup Instructions

### Prerequisites
- Node.js v18+
- Supabase Project (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
- LiveKit Cloud Project (`LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`)

### 1. Backend Setup

```bash
cd backend
npm install
# Create a .env file based on .env.example
npm run dev
```
The backend will run on `http://localhost:5000`.

### 2. Frontend Setup

```bash
cd frontend
npm install
# Create a .env.local file based on .env.local.example
npm run dev
```
The frontend will run on `http://localhost:3000`.

## Features
- Complete Authentication Flow (Sign Up / Sign In)
- Modern Material Design 3 inspired Dashboard
- Create and Join Meetings via Unique ID
- Full Video Conferencing Room (Video, Audio, Screen Share)
