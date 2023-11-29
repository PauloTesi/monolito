import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "transation",
    timestamps: false
})
export default class transaction extends Model {

    @Column({allowNull: false, primaryKey: true})
    id: string;
    
    @Column({allowNull: false, field: "order_id"})
    orderId: string;
    
    @Column({allowNull: false})
    amount: number;
    
    @Column({allowNull: false})
    status: string;
    
    @Column({allowNull: false, field: "created_at"})
    createdAt: Date;
    
    @Column({allowNull: false, field: "updated_at"})
    updatedAt?: Date;

}