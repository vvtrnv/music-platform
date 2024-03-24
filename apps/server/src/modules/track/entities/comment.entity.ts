import { DataTypes, Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export class Comment extends Model {
  @Column({ type: DataTypes.UUID, primaryKey: true })
  id?: string;
  @Column
  username?: string;
  @Column
  text?: string;
}
