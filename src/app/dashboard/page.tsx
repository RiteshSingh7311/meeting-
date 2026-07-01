"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Video, Calendar, Clock, LogOut, Copy, Check, X } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [roomName, setRoomName] = useState("");
  const [createdMeetingId, setCreatedMeetingId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/auth/signin");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      router.push(`/room?id=${roomName}`);
    }
  };

  const handleCreateMeeting = async () => {
    const newRoomId = `mtg-${Math.random().toString(36).substring(2, 9)}`;
    // Typically you would call backend to register this meeting in DB
    setCreatedMeetingId(newRoomId);
    setShowModal(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(createdMeetingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">ECE CHAMPS Dashboard</div>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 font-medium">{user.user_metadata?.full_name || user.email}</span>
          <button onClick={handleSignOut} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Actions Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm p-6 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Start a Meeting</h3>
            <button 
              onClick={handleCreateMeeting}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              <Video size={24} />
              New Meeting
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-6 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Join Meeting</h3>
            <form onSubmit={handleJoinMeeting} className="space-y-4">
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Enter Meeting ID or Link"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button 
                type="submit"
                disabled={!roomName.trim()}
                className="w-full flex items-center justify-center bg-slate-100 text-blue-600 font-semibold py-3 rounded-2xl hover:bg-slate-200 transition-all disabled:opacity-50"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* History / Upcoming Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-sm p-6 border border-slate-100 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Upcoming Meetings</h3>
              <button className="text-sm font-medium text-blue-600 hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {/* Dummy Data for demonstration */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Product Sync</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <Clock size={14} /> Today, 2:00 PM - 3:00 PM
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 shadow-sm transition-colors">
                  Join Now
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Weekly All Hands</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <Clock size={14} /> Tomorrow, 10:00 AM - 11:30 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Create Meeting Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Meeting Ready!</h2>
            <p className="text-slate-600 mb-6">Share this meeting code with others so they can join.</p>
            
            <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-200 mb-8">
              <span className="font-mono text-lg text-slate-800 font-medium tracking-wide">{createdMeetingId}</span>
              <button 
                onClick={handleCopy}
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600 flex items-center gap-2"
                title="Copy Meeting ID"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                <span className="text-sm font-medium">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-white border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => router.push(`/room?id=${createdMeetingId}`)}
                className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
