import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Tracks' })
export class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  artist: string;
  @Column({ default: 0 })
  listens: number;
  @Column()
  imageId: string;
  @Column()
  audioId: string;
}
