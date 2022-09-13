import { BaseEntity } from "typeorm";
export declare class Procedimento extends BaseEntity {
    id: string;
    updatedAt: Date;
    name: string;
    description?: string;
    quantity: number;
}
