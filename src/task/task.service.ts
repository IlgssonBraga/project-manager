// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async findAllByProject(id: number): Promise<Task[]> {
    return await this.tasksRepository.find({ where: { projectId: id } });
  }

  async findOne(id: number): Promise<Task[]> {
    return await this.tasksRepository.find({ where: { id } });
  }

  async create(task: Task): Promise<Task> {
    return await this.tasksRepository.save(task);
  }

  async update(id: number, task: Task): Promise<void> {
    await this.tasksRepository.update(id, task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
