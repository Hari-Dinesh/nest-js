import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { RentifyModule } from './rentify/rentify.module';


@Module({
  imports: [TasksModule, RentifyModule],
  
  
})
export class AppModule {}
