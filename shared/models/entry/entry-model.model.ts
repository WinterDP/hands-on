export interface EntryModel {
    id: string;
    createdDate: Date;
    updatedDate: Date;
    description: string | null;
    files: string[] | null;
}