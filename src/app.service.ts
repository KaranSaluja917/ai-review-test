import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! PULL REQUEST FILE TEST 333333';
  }

  getHelloHH(): string {
    return 'Hello World! PULL REQUEST FILE TEST 1111111';
  }
}
