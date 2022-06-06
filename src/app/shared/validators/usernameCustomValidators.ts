import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

export function DuplicateUserName(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      take(1),
      switchMap(() => {
        return authService.checkUserNameExists(control.value).pipe(
          map((value) => {
            return value ? { usernameExists: true } : null;
          })
        );
      })
    );
    // return timer(500).pipe(
    //   switchMap(() => {
    //     console.log('validator is running');
    //     if (!control.value) return of(null);
    //     return authService.checkUserNameExists(control.value).pipe(
    //       map((response) => {
    //         return response ? of({ usernameExists: true }) : of(null);
    //       })
    //     );
    //   })
    // );
  };
}
