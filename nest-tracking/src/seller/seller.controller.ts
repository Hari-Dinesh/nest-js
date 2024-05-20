import { Body, Controller, Delete, Get ,Param,Post,Put} from '@nestjs/common';
import { SellerService } from './seller.service';
import { createseller } from './dto/create-newseller';
import { Seller } from './seller.model';
@Controller('seller')
export class SellerController {
    constructor(private sellerservice:SellerService){}

    @Post()
    createNewProperty(@Body() newProperty:createseller):Promise<Seller>{
        return this.sellerservice.createNewProperty(newProperty);
    }

    @Get()
    getAllProperties():Promise<Seller[]>{
        return this.sellerservice.getAllData();
    }

    @Get('/:id')
    getPropertyById(@Param('id') id:string):Promise<Seller>{
        return this.sellerservice.getPropertyById(id);
    }

    @Get(':/uuid')
    getMyAllProperties(@Param('uuid') uuid:String):Promise<Seller[]>{
        return this.sellerservice.getMyAllProperties(uuid)
    }

    @Put(':id/image')
    updateMyImage(@Param('id') id:string, @Body('image') image:String):Promise<Seller>{
        console.log(image)
        return this.sellerservice.updateImageField(id,image)
    }

    @Delete('/:id')
    deleteProperty(@Param('id') id:string):Promise<Seller>{
        
        return this.sellerservice.deleteMyProperty(id)
    }
}

