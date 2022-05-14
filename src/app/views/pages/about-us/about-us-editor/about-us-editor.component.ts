import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutUsService } from '../services/about-us.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-about-us-editor',
  templateUrl: './about-us-editor.component.html',
  styleUrls: ['./about-us-editor.component.scss'],
})
export class AboutUsEditorComponent implements OnInit {
  constructor(
    private aboutUsService: AboutUsService,
    private toastService: HotToastService
  ) {}

  // ---------------- EDITOR CONFIG ----------------
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'], // toggled buttons

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button

      ['link', 'image', 'video'], // link and image, video
    ],
  };

  aboutUsForm = new FormGroup({
    body: new FormControl(),
  });

  ngOnInit(): void {
    this.refreshAboutUs();
  }

  refreshAboutUs() {
    this.aboutUsService.getAboutUs().subscribe((resData) => {
      const body = resData.data[0].body;
      this.aboutUsForm.patchValue({
        body: body,
      });
    });
  }

  onUpdateAboutUs() {
    const body = this.aboutUsForm.value.body;
    this.aboutUsService.setAboutUs(body).subscribe(() => {
      this.toastService.success('تم تغيير من نحن بنجاح');
    });
  }
}
