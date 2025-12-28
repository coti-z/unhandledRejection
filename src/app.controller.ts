import { Controller, Get } from '@nestjs/common';
import { AService } from './a.service';

@Controller()
export class AppController {
  constructor(private aService: AService) {}
  @Get()
  getHello(): string {
    console.log('aService:', this.aService);
    console.log('checking B:', this.aService.checkB());
    return 'ok';
  }
}
