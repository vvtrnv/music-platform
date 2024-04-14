import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Files' })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  bucket: string;
  @Column()
  filename: string;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updateAt?: Date;
}
