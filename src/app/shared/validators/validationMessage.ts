import { FormGroup } from "@angular/forms";
import { ValidationMessage } from "../models/validation-message";

export const validationMessages: ValidationMessage[] = [
    {error: 'required', formControlName: ['username'], message: 'Please enter username.'},   
    {error: 'required', formControlName: ['password'], message: 'Please enter password.'},   
    {error: 'Unauthorized', formControlName: ['username'], message: 'Username or password was incorrect.'},   
];

export function validationMessage(formControlName: string, formGroup: FormGroup): string {
    if(formGroup && formGroup.get(formControlName)){
        for(let error of validationMessages){
            if(!error.formControlName || error.formControlName.length === 0 || error.formControlName.includes(formControlName)
            && formGroup.get(formControlName).hasError(error.error)){
                return error.message;
            }
        }
    }

    return '';
}

