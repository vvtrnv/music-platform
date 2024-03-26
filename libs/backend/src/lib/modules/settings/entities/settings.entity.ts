import { DataTypes, Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export class Settings extends Model {
  @Column({ type: DataTypes.UUID, primaryKey: true })
  id?: string;
  @Column
  name?: string;
  @Column
  value?: string;
  @Column
  sysname?: string;
  @Column
  description?: string;
}
