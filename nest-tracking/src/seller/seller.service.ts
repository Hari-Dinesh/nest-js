import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createseller } from './dto/create-newseller';
import { Seller } from './seller.model';

@Injectable()
export class SellerService {

    constructor(
        @InjectModel('Seller') private sellerModel: Model<Seller>
      ) {}

    async createNewProperty(newProperty:createseller): Promise<Seller>{
        const createdSeller = new this.sellerModel(newProperty);
        return createdSeller.save();
    }

    async getAllData():Promise<Seller[]>{
        return await this.sellerModel.find();
    }

    async getPropertyById(id:String):Promise<Seller>{
        return await this.sellerModel.findById(id);
    }

    async getMyAllProperties(uuid:String):Promise<Seller[]>{
        return await this.sellerModel.find({userid:uuid});
    }

    async deleteMyProperty(id:string):Promise<Seller>{
        const data=this.getPropertyById(id)
        return await this.sellerModel.findByIdAndDelete(id)
    }

    async updateImageField(id:String,image:String):Promise<Seller>{
        
        
        return await this.sellerModel.findByIdAndUpdate(
            id,
            {image:image},
            { new: true } );
    }
}
