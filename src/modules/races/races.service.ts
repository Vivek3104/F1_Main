import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateRaceDto, UpdateRaceDto } from './dto/race.dto';

@Injectable()
export class RacesService {
  constructor(private prisma: PrismaService) {}

  create(createRaceDto: CreateRaceDto) {
    return this.prisma.race.create({
      data: {
        ...createRaceDto,
        date: new Date(createRaceDto.date),
      },
    });
  }

  findAll() {
    return this.prisma.race.findMany({ include: { circuit: true } });
  }

  async findOne(id: string) {
    const race = await this.prisma.race.findUnique({
      where: { id },
      include: { circuit: true },
    });
    if (!race) throw new NotFoundException('Race not found');
    return race;
  }

  async update(id: string, updateRaceDto: UpdateRaceDto) {
    await this.findOne(id);
    const data: any = { ...updateRaceDto };
    if (updateRaceDto.date) {
      data.date = new Date(updateRaceDto.date);
    }
    return this.prisma.race.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.race.delete({ where: { id } });
  }
}
