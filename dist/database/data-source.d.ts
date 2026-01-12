import { Mongoose } from "mongoose";
declare class dataScource {
    static instance?: dataScource;
    private connectionString;
    private dbName;
    client?: Mongoose;
    constructor();
    static getInstance(): dataScource;
    collectionExists(collectionName: string): Promise<boolean>;
    createCollection(collectionName: string): Promise<boolean>;
}
declare const dataScourceClient: dataScource;
export default dataScourceClient;
