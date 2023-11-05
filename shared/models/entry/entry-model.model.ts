export interface EntriesGetModel {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string;
    result: EntryModel[];
}

export interface EntryModel {
    id: string;
    createdDate: Date;
    updatedDate: Date;
    description: string | null;
    files: string[] | null;
}