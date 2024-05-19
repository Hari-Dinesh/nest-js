import { Module } from '@nestjs/common';
import { RentifyController } from './rentify.controller';
import { RentifyService } from './rentify.service';
import { RentifyService } from './rentify.service';

@Module({
  controllers: [RentifyController],
  providers: [RentifyService]
})
export class RentifyModule {}
