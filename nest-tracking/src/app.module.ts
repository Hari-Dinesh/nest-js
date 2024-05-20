import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sriharidinesh77:Asdfg123@cluster0.jpkeqp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), SellerModule],
  
  
})
export class AppModule {}
