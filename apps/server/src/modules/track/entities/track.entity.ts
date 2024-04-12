import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistEntity } from '../../artist/entities/artist.entity';

@Entity({ name: 'Tracks' })
export class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  listens: number;

  @Column()
  imageId: string;

  @Column()
  audioId: string;

  @ManyToMany(() => ArtistEntity, (artist) => artist.tracks)
  artists: ArtistEntity[];
}
