import { Schema } from "mongoose";
declare const TodoModel: import("mongoose").Model<{
    title: string;
    completed: boolean;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    title: string;
    completed: boolean;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
    completed: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    title: string;
    completed: boolean;
}, import("mongoose").Document<unknown, {}, {
    title: string;
    completed: boolean;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    title: string;
    completed: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        title: string;
        completed: boolean;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        title: string;
        completed: boolean;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
    completed: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    completed: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare function initializeTodoModel(): void;
export default TodoModel;
