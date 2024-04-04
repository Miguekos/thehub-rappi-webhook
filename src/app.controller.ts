import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { ClientProxy } from '@nestjs/microservices';

@Controller(`orders`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/recibe/:store')
  postMessage(@Body() body: any, @Param('store') store: string) {
    console.log(`Body: ${JSON.stringify(body)} - Param ${store}`);
    return this.appService.postHello(body, store);
    // console.log('response', response);
    // return `Order Received from store: ${store}`;
  }
}
