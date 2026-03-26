import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateDriverDto, UpdateDriverDto } from './dto/driver.dto';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  create(createDriverDto: CreateDriverDto) {
    return this.prisma.driver.create({ data: createDriverDto });
  }

  findAll() {
    return this.prisma.driver.findMany({ include: { team: true } });
  }

  async findOne(id: string) {
    const driver = await this.prisma.driver.findUnique({
      where: { id },
      include: { team: true },
    });
    if (!driver) throw new NotFoundException('Driver not found');
    return driver;
  }

  async update(id: string, updateDriverDto: UpdateDriverDto) {
    await this.findOne(id);
    return this.prisma.driver.update({
      where: { id },
      data: updateDriverDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.driver.delete({ where: { id } });
  }
}
