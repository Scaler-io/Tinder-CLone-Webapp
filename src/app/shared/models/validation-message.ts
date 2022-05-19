export interface ValidationMessage{
    error: string;
    formControlName?: string[] | string | null;
    message: string;
}