import { Schema } from 'mongoose';
import {v4 as uuid} from 'uuid'
export const sellerSchema = new Schema({
    userid:{
        type:String,
        required: true,
        default: () => uuid()
    },
    location: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    phone: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nearby: {
        type: String,
        required: true
    },
    

});