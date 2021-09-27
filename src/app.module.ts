import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppBaseController } from './app.controller-base';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppBaseController],
  providers: [AppService],
})
export class AppModule {}
