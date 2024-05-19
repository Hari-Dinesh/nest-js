import { Body, Controller,Delete,Get, Param, Patch, Post, Query} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, taskstatus } from './tasks.model';
import { createtask } from './dto/create-task.dto';
import { filterdto } from './dto/filter-search.dto';


@Controller('tasks')
export class TasksController {
    constructor(private taskservive:TasksService){}

    @Get()
    gettasks(@Query() filterdto:filterdto):Task[]{
        if(Object.keys(filterdto).length){
            return this.taskservive.getTasksWithFilters(filterdto)
        }
        else{
            return this.taskservive.getTasks()

        }
    }

    @Get('/:id')
    gettaskbyid(@Param('id') id:string):Task{
        console.log(id,typeof id);
        
        return this.taskservive.getTaskByID(id);
    }

    @Post()
    creatTask(@Body() taskdto:createtask):Task{
        return this.taskservive.createNewTask(taskdto)
    }

    @Delete(':/id')
    deletetaskbyid(@Param('id') id:string):void{
        this.taskservive.deleteTaskById(id)
    }

    @Patch(':/id')
    updatetaskbyid(@Param('id') id:string,@Body('status') status:taskstatus):Task{
        return this.taskservive.updateTaskById(id,status)
    }
    
}

