import { Column, DataType, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'Tracks'})
export class TrackEntity extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id?: string;
  @Column
  name?: string;
  @Column
  artist?: string;
  @Column({ defaultValue: 0 })
  listens?: number;
  @Column
  picture?: string;
  @Column
  audio?: string;
}
