import { Mongoose } from "mongoose";

export type dataSourceType = {
  client?: Mongoose;
  collectionExists: (collectionName: string) => Promise<boolean>;
  createCollection: (collectionName: string) => Promise<boolean>;
};

declare global {
  var db: dataSourceType;
}

class dataSource {
  public static instance?: dataSource;
  private connectionString: string = "mongodb://root:example@127.0.0.1:27017";
  private dbName: string = "todoapp";
  private params: string = "?authSource=admin&retryWrites=true&w=majority";
  public client?: Mongoose;
  constructor() {
    try {
      // Initialize MongoDB client here
      this.client = new Mongoose();
      this.client
        .connect(this.connectionString + "/" + this.dbName + this.params, {
          allowPartialTrustChain: true,
          authSource: "admin",
          retryWrites: true,
          w: "majority",
          retryReads: true,
          ssl: false,
        })
        .then(() => {
          console.log("Connected to MongoDB database");
        })
        .catch((err) => {
          console.error("MongoDB connection error", err);
        });
    } catch (error) {
      console.error("Error initializing MongoDB client", error);
    }
  }

  static getInstance() {
    if (!dataSource.instance) {
      dataSource.instance = new dataSource();
    }
    return dataSource.instance;
  }

  collectionExists(collectionName: string): Promise<boolean> {
    if (
      !this.client ||
      !this.client?.connection ||
      !this.client?.connection.db
    ) {
      throw new Error("MongoDB client is not initialized");
    }
    return this.client?.connection.db
      .listCollections({ name: collectionName })
      .hasNext();
  }

  async createCollection(collectionName: string): Promise<boolean> {
    if (
      !this.client ||
      !this.client?.connection ||
      !this.client?.connection.db
    ) {
      throw new Error("MongoDB client is not initialized");
    }
    const collection = await this.client?.connection.db.createCollection(
      collectionName
    );
    return collection !== null;
  }
}

const db = dataSource.getInstance();

export default db;
