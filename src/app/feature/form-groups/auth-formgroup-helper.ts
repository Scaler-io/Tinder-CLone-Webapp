import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class AuthFormGroupHelper{
    public static fb: FormBuilder = new FormBuilder();

    public static createMemberLoginFormGroup(): FormGroup{
        return this.fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }
}