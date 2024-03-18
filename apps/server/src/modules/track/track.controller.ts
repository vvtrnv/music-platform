import { Controller, Get, Patch, Post } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(
    protected trackService: TrackService,
  ) {}

  @Get()
  public findAll() {}
  @Get()
  public findById() {}
  @Post()
  public create() {}
  @Patch()
  public update() {}
}
