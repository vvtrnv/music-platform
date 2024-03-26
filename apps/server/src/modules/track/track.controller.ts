import { Body, Controller, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { SearchTrackDto } from './dto/search.track.dto';
import { Track } from './entities/track.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTrackDto } from './dto/create.track.dto';

@ApiTags('Music tracks')
@Controller('track')
export class TrackController {
  constructor(
    protected trackService: TrackService,
  ) {}
  
  @ApiOperation({ summary: 'Search tracks by filter' })
  @ApiResponse({ status: HttpStatus.OK, type: [Track] })
  @Get()
  protected async findAll(@Query() query: SearchTrackDto): Promise<Track[]> {
    return await this.trackService.findAll(query);
  }

  @ApiOperation({ summary: 'Search track by id' })
  @ApiResponse({ status: HttpStatus.OK, type: Track })
  @Get(':id')
  protected async findById(@Param() id: string): Promise<Track> {
    return await this.trackService.findById(id);
  }

  @ApiOperation({ summary: 'Create track' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Track })
  @Post('')
  protected async create(@Body() dto: CreateTrackDto): Promise<Track> {
    return await this.trackService.create(dto);
  }

  @ApiOperation({ summary: 'Update track' })
  @ApiResponse({ status: HttpStatus.OK, type: Track })
  @Post(':id')
  protected async update(
    @Param() id: string,
    @Body() dto: CreateTrackDto,
  ): Promise<void> {
    return await this.trackService.update(id, dto);
  }
}
