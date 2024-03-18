import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // const rabbitMq = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       prefetchCount: 1,
  //       urls: [
  //         'amqps://ntumsuks:FvfKWEs6nLmmA7pW691goxk6ih_1PyPO@toad.rmq.cloudamqp.com/ntumsuks',
  //       ],
  //       noAck: true,
  //       queue: 'my_queue',
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   },
  // );

  // await rabbitMq.listen();
}
bootstrap();
