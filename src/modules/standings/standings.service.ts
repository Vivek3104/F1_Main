import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateStandingDto, UpdateStandingDto } from './dto/standing.dto';

@Injectable()
export class StandingsService {
  constructor(private prisma: PrismaService) {}

  create(createStandingDto: CreateStandingDto) {
    return this.prisma.standing.create({ data: createStandingDto });
  }

  findAll(season?: number) {
    const where = season ? { season: Number(season) } : {};
    return this.prisma.standing.findMany({
      where,
      orderBy: [
        { season: 'desc' },
        { type: 'asc' },
        { position: 'asc' },
      ],
      include: {
        driver: true,
        team: true,
      },
    });
  }

  async findOne(id: string) {
    const standing = await this.prisma.standing.findUnique({
      where: { id },
      include: { driver: true, team: true },
    });
    if (!standing) throw new NotFoundException('Standing not found');
    return standing;
  }

  async update(id: string, updateStandingDto: UpdateStandingDto) {
    await this.findOne(id);
    return this.prisma.standing.update({
      where: { id },
      data: updateStandingDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.standing.delete({ where: { id } });
  }
}
