export interface Task{
    id:string;
    title:string;
    description:string;
    status:taskstatus;
}
export enum taskstatus{
    OPEN='OPEN',
    PROGRESS='PROGRESS',
    DONE='DONE'
}
