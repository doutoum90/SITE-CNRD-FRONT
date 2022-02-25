import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { ArticlesService } from "app/views/articles/articles.service";
import { Users } from "app/views/articles/model/article.model";
import { FileUploader } from "ng2-file-upload";
import { CustomValidators } from "ngx-custom-validators";
import { take } from "rxjs/operators";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  @ViewChild("autosize") autosize: CdkTextareaAutosize;

  firstTabFormGroup: FormGroup;
  secondTabFormGroup: FormGroup;
  thirdTabFormGroup: FormGroup;
  currentUser: Users;
  editEnabled = true;

  clear() {
    this.secondTabFormGroup.get("photo").setValue(null);
  }
  constructor(
    private readonly jwtAuth: JwtAuthService,
    private readonly _ngZone: NgZone,
    private readonly egretLoader: AppLoaderService,
    private readonly articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.currentUser = this.jwtAuth.getUser();
    this.createFirstTabForm();
    this.createSecondTabForm();
    this.createThirdTabForm();
    this.initializeFirstTabForm(this.currentUser);
    this.initializeSecondTabForm(this.currentUser);
    this.initializeThirdTabForm(this.currentUser);
  }

  createFirstTabForm() {
    this.firstTabFormGroup = new FormGroup({
      _id: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      email: new FormControl(),
      dateNaissance: new FormControl(),
      phone: new FormControl(),
      adresse: new FormControl(),
      bio: new FormControl(),
    });
  }
  initializeFirstTabForm(user: Users) {
    this.firstTabFormGroup.patchValue({
      _id: user._id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      dateNaissance: user.dateNaissance,
      phone: user.phone,
      adresse: user.adresse,
      bio: user.bio,
    });
  }
  createSecondTabForm() {
    this.secondTabFormGroup = new FormGroup({
      _id: new FormControl(),
      photo: new FormControl(),
    });
  }

  initializeSecondTabForm(user: Users) {
    this.secondTabFormGroup.patchValue({
      _id: user._id,
      photo: user.photo,
    });
  }
  createThirdTabForm() {
    const password = new FormControl("", Validators.required);
    const confirmPassword = new FormControl(
      "",
      CustomValidators.equalTo(password)
    );
    this.thirdTabFormGroup = new FormGroup({
      _id: new FormControl(),
      previousPassWord: new FormControl(),
      newPassword: password,
      newPasswordConfirm: confirmPassword,
    });
  }

  initializeThirdTabForm(user: Users) {
    this.thirdTabFormGroup.patchValue({
      _id: user._id,
    });
  }
  firstTabEdit() {
    const user = this.firstTabFormGroup.value;
    this.editBackend(user);
  }

  secondTabEdit() {
    const user = this.secondTabFormGroup.value;
    this.editBackend(user);
  }

  thirdTabEdit() {
    const user = {
      ...this.thirdTabFormGroup.value,
      motDePasse: this.thirdTabFormGroup.value?.newPassword,
      oldPassword: this.thirdTabFormGroup.value?.previousPassWord,
    };
    delete user.previousPassWord;
    delete user.newPassword;
    delete user.newPasswordConfirm;
    this.editBackend(user);
  }

  cleanAndLoad() {
    this.firstTabFormGroup.reset();
    this.secondTabFormGroup.reset();
    this.thirdTabFormGroup.reset();
    this.initializeFirstTabForm(this.currentUser);
    this.initializeSecondTabForm(this.currentUser);
    this.initializeThirdTabForm(this.currentUser);
  }
  editBackend(user: Partial<Users>) {
    this.articlesService.addEditUser(user, true).subscribe(
      (user) => {
        this.currentUser = this.jwtAuth.getUser();
        this.egretLoader.open(`Vos  informations ont bien été mis à jour`, {
          width: "320px",
        });
        setTimeout(() => {
          this.egretLoader.close();
        }, 2000);
        this.cleanAndLoad();
      },
      (err) => {
        this.egretLoader.open(err?.error?.message, {
          width: "320px",
        });
        setTimeout(() => {
          this.egretLoader.close();
        }, 2000);
      }
    );
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
