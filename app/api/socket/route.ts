import { Server as NetServer } from 'http';
import { NextRequest } from 'next/server';
import { Server as SocketServer } from 'socket.io';

const ioHandler = (req: NextRequest & { socket: any }) => {
  if (!req.socket.server.io) {
    const httpServer: NetServer = req.socket.server;
    const io = new SocketServer(httpServer, { path: '/api/socket' });
    io.on('connection', (socket) => {
      socket.on('msg', (msg) => io.emit('msg', msg));
    });
    req.socket.server.io = io;
  }
  return Response.json({ ok: true });
};
export { ioHandler as GET, ioHandler as POST };