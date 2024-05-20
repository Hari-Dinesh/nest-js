import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { MongooseModule } from '@nestjs/mongoose';
import { sellerSchema } from './schema/seller-model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Seller', schema: sellerSchema }]),
  ],
  controllers: [SellerController],
  providers: [SellerService]
})
export class SellerModule {}
