import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Files' })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  filename: string;
  @Column()
  path: string;
}
