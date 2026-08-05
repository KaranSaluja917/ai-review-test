import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! PULL REQUEST FILE TEST 1';
  }
}
