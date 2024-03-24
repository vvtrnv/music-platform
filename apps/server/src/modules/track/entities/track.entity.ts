import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Track extends Model {
  @Column
  id?: string;
  @Column
  name?: string;
  @Column
  artist?: string;
  @Column
  litens?: number;
  @Column
  picture?: string;
  @Column
  audio?: string;
}
