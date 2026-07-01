import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomName, participantName } = body;
    
    if (!roomName || !participantName) {
      return NextResponse.json({ error: 'roomName and participantName are required' }, { status: 400 });
    }

    const livekitApiKey = process.env.LIVEKIT_API_KEY || '';
    const livekitApiSecret = process.env.LIVEKIT_API_SECRET || '';

    if (!livekitApiKey || !livekitApiSecret) {
      return NextResponse.json({ error: 'LiveKit credentials are not configured in backend/frontend env' }, { status: 500 });
    }

    const at = new AccessToken(livekitApiKey, livekitApiSecret, {
      identity: participantName,
    });
    
    at.addGrant({ roomJoin: true, room: roomName });
    const token = await at.toJwt();

    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    return NextResponse.json({ error: 'Failed to generate token' }, { status: 500 });
  }
}
