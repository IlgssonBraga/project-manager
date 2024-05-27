// src/tasks/tasks.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task[]> {
    return await this.tasksService.findOne(id);
  }

  @Get('projects/:id')
  async findAllByProject(@Param('id') id: number): Promise<Task[]> {
    return await this.tasksService.findAllByProject(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return await this.tasksService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<void> {
    return await this.tasksService.update(id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.tasksService.remove(id);
  }
}
