import { IsString, IsNotEmpty, IsInt, IsOptional, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsOptional()
  @IsUUID()
  teamId?: string;
}

export class UpdateDriverDto extends PartialType(CreateDriverDto) {}
