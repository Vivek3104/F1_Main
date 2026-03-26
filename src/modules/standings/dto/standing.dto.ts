import { IsEnum, IsInt, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { StandingType } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class CreateStandingDto {
  @IsEnum(StandingType)
  type: StandingType;

  @IsInt()
  season: number;

  @IsNumber()
  points: number;

  @IsInt()
  position: number;

  @IsOptional()
  @IsUUID()
  driverId?: string;

  @IsOptional()
  @IsUUID()
  teamId?: string;
}

export class UpdateStandingDto extends PartialType(CreateStandingDto) {}
