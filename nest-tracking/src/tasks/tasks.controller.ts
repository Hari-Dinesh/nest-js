import { Controller,Get} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
    constructor(private taskservive:TasksService){}

    @Get()
    getalltasks():Task[]{
        return this.taskservive.getalltasks()
    }
}