import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackSearchDto } from './dto/track.search.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { TrackCreateDto } from './dto/track.create.dto';
import { TrackUpdateDto } from './dto/track.update.dto';
import { UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadedFiles } from '@nestjs/common';

@Controller('track')
export class TrackController {
  constructor(
    protected trackService: TrackService,
  ) {}

  @Get()
  @ApiOperation({})
  public findAll(@Query() dto: TrackSearchDto) {
    return this.trackService.findAll(dto);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiParam({ name: 'id' })
  public findById(@Param() id: string) {
    return this.trackService.findById(id);
  }

  @Post()
  @ApiOperation({})
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'audio', maxCount: 1 },
    { name: 'picture', maxCount: 1 },
  ]))
  public create(
    @UploadedFiles() files,
    @Body() dto: TrackCreateDto,
  ) {
    console.log(files);
    return this.trackService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({})
  @ApiParam({ name: 'id' })
  public update(@Param() id: string, @Body() dto: TrackUpdateDto) {
    return this.trackService.update(id, dto);
  }
}
