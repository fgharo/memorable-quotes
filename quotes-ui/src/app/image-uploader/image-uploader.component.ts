import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DroppyService } from '../shared/service/droppy.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  file = { data: null, inProgress: false, progress: 0};
  fileLabel  = "No file chosen yet.";
  localUrl: any[];
  @Output() fileName = new EventEmitter<string>();

  constructor(private uploadService: DroppyService) { }

  ngOnInit() {
  }

  uploadFile(file) {
    this.file = file;
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService
    .upload(formData)
    .pipe(
        map((event: any) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.fileLabel = file.data.name + " uploading.";
              file.progress = Math.round(event.loaded * 100 / event.total);
              break;
            default:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          file.inProgress = false;
          this.fileLabel = file.data.name + " upload failed.";
          return of(`${file.data.name} upload failed.`);
        })
    ).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          this.fileLabel = file.data.name + " uploaded.";
        }
      });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      if(fileUpload.files.length > 0){
        this.fileName.emit(fileUpload.files[0].name);
        this.fileLabel = fileUpload.files[0].name + " selected.";
        this.showPreviewImage(fileUpload.files[0]);
        this.uploadFile({ data: fileUpload.files[0], inProgress: false, progress: 0});
      }
    };
    fileUpload.click();
  }

  showPreviewImage(file){
    var reader = new FileReader();
    reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log("localUrl:");
        console.log(this.localUrl);
    }
    reader.readAsDataURL(file);
  }
}
