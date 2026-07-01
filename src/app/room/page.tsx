"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
  ControlBar,
  GridLayout,
  ParticipantTile,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";

function RoomContent() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('id') || "default-room";
  const router = useRouter();

  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initRoom = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push("/auth/signin");
          return;
        }

        const userName = session.user.user_metadata?.full_name || session.user.email;
        
        // Fetch LiveKit token from internal API route
        const apiUrl = '/api';
        const res = await fetch(`${apiUrl}/meeting/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.access_token}`
          },
          body: JSON.stringify({
            roomName: roomId,
            participantName: userName
          })
        });

        if (!res.ok) {
          let errorMessage = "Failed to get meeting token";
          try {
            const errData = await res.json();
            errorMessage = errData.error || errorMessage;
          } catch (e) {}
          throw new Error(errorMessage);
        }

        const data = await res.json();
        setToken(data.token);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initRoom();
  }, [roomId, router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Connecting to {roomId}...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-red-400">Error: {error}</div>;
  if (!token) return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Could not get token</div>;

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      onDisconnected={() => router.push('/dashboard')}
    >
      <VideoConference />
      <RoomAudioRenderer />
    </LiveKitRoom>
  );
}

export default function Room() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Loading room...</div>}>
      <RoomContent />
    </Suspense>
  );
}
