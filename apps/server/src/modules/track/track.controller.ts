import { Controller } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(
    protected trackService: TrackService,
  ) {}

}
