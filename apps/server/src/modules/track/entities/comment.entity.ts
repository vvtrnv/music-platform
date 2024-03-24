import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export class Comment extends Model {
  @Column
  id?: string;
  @Column
  username?: string;
  @Column
  text?: string;
}
