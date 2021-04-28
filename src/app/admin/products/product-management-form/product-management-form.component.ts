import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { omit } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../../../common/products/models/product-model';
import {
  markAllChildrenAsTouched,
  shouldShowError$,
} from '../../../shared/utils/form-utils';
import { LoadProductDetailsUsecase } from '../usecases/load-product-details-usecase';
import { UpsertProductUsecase } from '../usecases/upsert-product-usecase';

@Component({
  selector: 'app-product-management-form',
  templateUrl: './product-management-form.component.html',
  styleUrls: ['./product-management-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductManagementFormComponent implements OnInit {
  productFG!: FormGroup;
  portraitUrl$ = new BehaviorSubject<SafeUrl | null>(null);
  portraitHasError$!: Observable<boolean>;
  @Input() id!: string;
  @Output() submitSuccess = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private upsertProductUsecase: UpsertProductUsecase,
    private snackbar: MatSnackBar,
    private loadProductDetailsUsecase: LoadProductDetailsUsecase
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.productFG = this.fb.group({
      id: null,
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required]],
      portraitFile: [
        null,
        [
          (ctrl: AbstractControl) => {
            if (this.portraitUrl$.value) {
              return null;
            }
            return Validators.required(ctrl);
          },
        ],
      ],
    });
    this.portraitHasError$ = shouldShowError$(
      this.productFG.get('portraitFile')
    );
  }

  ngOnInit(): void {
    if (this.id) {
      this.loadProductDetailsUsecase
        .execute(this.id)
        .subscribe((result: ProductModel | undefined) => {
          if (!result) {
            return;
          }
          this.productFG.patchValue(omit(result, ['portraitUrl']));
          if (result.portraitUrl) {
            this.portraitUrl$.next(result.portraitUrl);
          }
        });
    }
  }

  handlePortraitChange(input: EventTarget | null): void {
    const file = (input as HTMLInputElement).files?.item(0);
    if (file) {
      this.productFG.patchValue({
        portraitFile: file,
      });
      this.portraitUrl$.next(
        this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
      );
    }
  }

  handleSubmit(): void {
    if (this.productFG.invalid) {
      markAllChildrenAsTouched(this.productFG);
      return;
    }
    this.upsertProductUsecase.execute(this.productFG.value).subscribe({
      next: () => {
        this.submitSuccess.emit();
      },
      error: () => {
        this.snackbar.open('Ocurrió un error al guardar el producto');
      },
    });
  }
}
