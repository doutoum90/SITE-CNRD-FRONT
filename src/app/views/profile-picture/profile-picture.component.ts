import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-profile-picture",
  templateUrl: "./profile-picture.component.html",
  styleUrls: ["./profile-picture.component.scss"],
})
export class ProfilePictureComponent implements OnInit {
  @Input()
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
    // this.file;
  }
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageData = reader.result;
        this.form.patchValue({ photo: this.imageData });
        this.imageSrcChange.emit(this.imageData);
      };
      reader.readAsDataURL(file);
    }
  }
  onchange(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
}
