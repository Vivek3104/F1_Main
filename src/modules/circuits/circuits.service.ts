import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateCircuitDto, UpdateCircuitDto } from './dto/circuit.dto';

@Injectable()
export class CircuitsService {
  constructor(private prisma: PrismaService) {}

  create(createCircuitDto: CreateCircuitDto) {
    return this.prisma.circuit.create({ data: createCircuitDto });
  }

  findAll() {
    return this.prisma.circuit.findMany();
  }

  async findOne(id: string) {
    const circuit = await this.prisma.circuit.findUnique({ where: { id } });
    if (!circuit) throw new NotFoundException('Circuit not found');
    return circuit;
  }

  async update(id: string, updateCircuitDto: UpdateCircuitDto) {
    await this.findOne(id);
    return this.prisma.circuit.update({
      where: { id },
      data: updateCircuitDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.circuit.delete({ where: { id } });
  }
}
