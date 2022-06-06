import { FormGroup, Validators } from "@angular/forms";
import { BaseFormGroupHelper } from "./BaseFormGroupHelper";

export class AuthFormGroupHelper extends BaseFormGroupHelper{
    public static createMemberLoginFormGroup(): FormGroup{
        return this.fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }
}