import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ORDERS_SERVICE') private ordersService: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }

  postHello(data: any, store: string) {
    console.log('Message recibe', data);
    return this.ordersService.send(
      { cmd: 'add-subscriber', store: store },
      data,
    );
  }
}
