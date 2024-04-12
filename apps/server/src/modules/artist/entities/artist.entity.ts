import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackEntity } from '../../track';

@Entity({ name: 'Artists' })
export class ArtistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => TrackEntity, (track) => track.artists)
  @JoinTable()
  tracks: TrackEntity[];
}
