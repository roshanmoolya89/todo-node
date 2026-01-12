export declare class TodoService {
    createTodo(todo: any): Promise<import("mongoose").Document<unknown, {}, {
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
    }>;
    getAllTodos(): Promise<(import("mongoose").Document<unknown, {}, {
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
    })[]>;
    getTodoById(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
    updateTodo(id: string, todo: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
    deleteTodo(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
}
