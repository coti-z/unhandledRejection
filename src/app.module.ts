import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AService } from './a.service';
import { BService } from './b.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AService, BService],
})
export class AppModule {}
