import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Track extends Model {
  @Column({ type: DataTypes.UUID, primaryKey: true })
  id?: string;
  @Column
  name?: string;
  @Column
  artist?: string;
  @Column
  listens?: number;
  @Column
  picture?: string;
  @Column
  audio?: string;
}
