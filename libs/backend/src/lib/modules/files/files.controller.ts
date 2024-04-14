import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('files')
export class FilesController {
  constructor(
    protected filesService: FilesService,
  ) {}
  
  @Get(':id')
  @ApiOperation({})
  @ApiParam({ name: 'id' })
  public async getFromMinio(@Param() id: string, @Res() res: Response) {
    const stream = await this.filesService.getFromMinio(id);
    stream.pipe(res as any);
  }
}
