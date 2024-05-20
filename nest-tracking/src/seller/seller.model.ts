import { Document } from 'mongoose';

export interface Seller extends Document {
    userid:string;
    location: string;
    image: string;
    phone: string;
    email: string;
    nearby: string;
}