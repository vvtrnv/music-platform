import { Controller, Get, Query } from '@nestjs/common';
import { SettingsSearchDto } from './dto/settings.search.dto';
import { SettingsService } from './settings.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('settings')
export class SettingsController {
  constructor(
    protected settingsService: SettingsService,
  ) {}
  @Get()
  @ApiOperation({})
  protected getSettings(@Query() dto: SettingsSearchDto) {
    return this.settingsService.find();
  }
}
