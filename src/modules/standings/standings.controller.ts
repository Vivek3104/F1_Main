import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { StandingsService } from './standings.service';
import { CreateStandingDto, UpdateStandingDto } from './dto/standing.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('standings')
export class StandingsController {
  constructor(private readonly standingsService: StandingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  create(@Body() createStandingDto: CreateStandingDto) {
    return this.standingsService.create(createStandingDto);
  }

  @Get()
  findAll(@Query('season') season?: number) {
    return this.standingsService.findAll(season);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.standingsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateStandingDto: UpdateStandingDto) {
    return this.standingsService.update(id, updateStandingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.standingsService.remove(id);
  }
}
