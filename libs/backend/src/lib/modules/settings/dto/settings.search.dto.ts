import { IsOptional, IsString } from 'class-validator';
import { BaseSearchDto } from '../../../base';
import { SettingsEntity } from '../entities/settings.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class SettingsSearchDto extends BaseSearchDto<SettingsEntity> {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  id?: string;
  
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  value?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sysname?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;
}
