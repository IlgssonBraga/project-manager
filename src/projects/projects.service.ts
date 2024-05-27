// src/projects/projects.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find();
  }

  async findOne(id: number): Promise<Project[]> {
    return await this.projectsRepository.find({ where: { id } });
  }

  async create(project: Project): Promise<Project> {
    return await this.projectsRepository.save(project);
  }

  async update(id: number, project: Project): Promise<void> {
    await this.projectsRepository.update(id, project);
  }

  async remove(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
