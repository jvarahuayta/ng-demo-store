import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const shouldShowError$ = (
  ctrl: AbstractControl | null
): Observable<boolean> => {
  if (!ctrl) {
    throw Error('control cannot be null');
  }
  const touched$ = new BehaviorSubject<boolean>(ctrl.touched);
  const oldMarkAsTouched = ctrl.markAsTouched.bind(ctrl);
  ctrl.markAsTouched = (
    ...args: Parameters<AbstractControl['markAsTouched']>
  ) => {
    touched$.next(true);
    oldMarkAsTouched(...args);
  };
  return combineLatest([touched$, ctrl.statusChanges]).pipe(
    map(([touched, status]) => touched && status === 'INVALID')
  );
};

const markAllChildrenAsTouchedForFG = (fg: FormGroup) => {
  Object.keys(fg.controls)
    .map((key) => fg.get(key))
    .forEach((control) => {
      markAllChildrenAsTouched(control);
    });
};

const markChildrenAsTouchedForFA = (fa: FormArray) => {
  fa.controls.forEach((control) => {
    markAllChildrenAsTouched(control);
  });
};

export const markAllChildrenAsTouched = (control: AbstractControl | null) => {
  if (!control) {
    throw Error('control cannot be null');
  }
  if (control instanceof FormGroup) {
    markAllChildrenAsTouchedForFG(control);
  } else if (control instanceof FormArray) {
    markChildrenAsTouchedForFA(control);
  } else {
    control.markAsTouched();
    control.updateValueAndValidity();
  }
};
