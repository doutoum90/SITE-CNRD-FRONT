import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-profile-picture",
  templateUrl: "./profile-picture.component.html",
  styleUrls: ["./profile-picture.component.scss"],
})
export class ProfilePictureComponent implements OnInit {
  imageData: string | ArrayBuffer;

  //
  uploader: FileUploader;
  hasDragOver = false;
  selectedFile = null;

  @Input()
  editmode = false;
  @Input() form: FormGroup;
  @Input() photo: FormControl;

  @Input()
  url = "";

  @Output()
  imageSrcChange = new EventEmitter();

  constructor() {
    this.uploader = new FileUploader({
      disableMultipart: false,
    });
  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  ngOnInit() {}

  openModal() {
  }
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.patchValue({ photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
  onchange(event) {
    this.selectedFile = event.target.files[0];
  }
}
