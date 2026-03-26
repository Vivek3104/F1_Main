import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  principal: string;

  @IsString()
  @IsNotEmpty()
  base: string;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
