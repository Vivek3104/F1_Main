import { IsString, IsNotEmpty, IsDateString, IsEnum, IsUUID } from 'class-validator';
import { RaceStatus } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  date: string;

  @IsUUID()
  @IsNotEmpty()
  circuitId: string;

  @IsEnum(RaceStatus)
  status: RaceStatus;
}

export class UpdateRaceDto extends PartialType(CreateRaceDto) {}
