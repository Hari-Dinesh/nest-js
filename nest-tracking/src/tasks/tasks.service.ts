import { Injectable } from '@nestjs/common';
import { Task, taskstatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { createtask } from './dto/create-task.dto';
import { filterdto } from './dto/filter-search.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterdto:filterdto): Task[]{
    const {status,search}=filterdto
    let task=this.getTasks()
    if(status){
      task=task.filter((task)=>{task.status===status})
    }
    if(search){
      task=task.filter((task)=>{
        if(task.description.includes(search)||task.title.includes(search)){
          return true
        }
        return false
      })
      return task
    }
  }

  createNewTask(taskdto:createtask): Task {
    const {title,description}=taskdto
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: taskstatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskByID(id:string):Task{
    console.log(".............",id);
    console.log(this.tasks );
    
    return this.tasks.find((task)=>{
        console.log(task.id==id);
        
        task.id==id});
    }

    deleteTaskById(id:String):void{
        this.tasks=this.tasks.filter((task)=>{task.id !== id})
    }

    updateTaskById(id:string,status:taskstatus):Task{
        const task=this.getTaskByID(id)
        task.status=status
        
        return task
    }
}
