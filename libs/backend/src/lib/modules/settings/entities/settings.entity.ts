import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Settings' })
export class SettingsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  sysname: string;
  @Column()
  value: string;
  @Column({ nullable: true })
  description?: string;
}
