// src/projects/projects.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project[]> {
    return await this.projectsService.findOne(id);
  }

  @Post()
  async create(@Body() project: Project): Promise<Project> {
    return await this.projectsService.create(project);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() project: Project,
  ): Promise<void> {
    return await this.projectsService.update(id, project);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.projectsService.remove(id);
  }
}
