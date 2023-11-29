import { Table, Model, PrimaryKey, Column } from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: false,
})
export default class ProductModel extends Model {

    @Column({allowNull: false, primaryKey: true})
    id: string;

    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    description: string;

    @Column({allowNull: false})
    salesPrice: number;

}