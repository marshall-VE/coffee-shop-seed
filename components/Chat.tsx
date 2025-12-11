'use client';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export default function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState<string[]>([]);

  useEffect(() => {
    const s = io({ path: '/api/socket' });
    setSocket(s);
    s.on('msg', (m: string) => setMsgs((v) => [...v, m]));
    return () => { s.disconnect(); };
  }, []);

  const send = () => {
    if (!msg.trim()) return;
    socket?.emit('msg', msg);
    setMsg('');
  };

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Live Chat</h2>
      <div className="h-48 overflow-y-auto border rounded p-2 bg-white">
        {msgs.map((m, i) => (
          <p key={i} className="text-sm">{m}</p>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          className="flex-1 px-2 border rounded"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && send()}
        />
        <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={send}>Send</button>
      </div>
    </section>
  );
}