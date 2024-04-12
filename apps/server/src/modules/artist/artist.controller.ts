import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { ArtistSearchDto } from './dto/artist.search.dto';
import { ArtistCreateDto } from './dto/artist.create.dto';
import { ArtistUpdateDto } from './dto/artist.update.dto';

@Controller('artists')
export class ArtistController {
  constructor(
    protected artistsService: ArtistService,
  ) {}

  @Get()
  @ApiOperation({})
  public findAll(@Query() dto: ArtistSearchDto) {
    return this.artistsService.findAll(dto);
  }

  @Get(':id')
  @ApiOperation({})
  @ApiParam({ name: 'id' })
  public findById(@Param() id: string) {
    return this.artistsService.findById(id);
  }

  @Post()
  @ApiOperation({})
  public create(@Body() dto: ArtistCreateDto) {
    return this.artistsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({})
  @ApiParam({ name: 'id' })
  public update(@Param() id: string, @Body() dto: ArtistUpdateDto) {
    return this.artistsService.update(id, dto);
  }
}
