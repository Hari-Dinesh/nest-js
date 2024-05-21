import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;
}