import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/live',
})
export class LiveGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected to Live Gateway: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected from Live Gateway: ${client.id}`);
  }

  // Example: Admins broadcasting a live race event (e.g., lap time, overtake, yellow flag)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @SubscribeMessage('broadcastRaceEvent')
  handleBroadcastRaceEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('Broadcasting event:', data);
    this.server.emit('raceEvent', data);
    return { status: 'Broadcasted successfully' };
  }
}
