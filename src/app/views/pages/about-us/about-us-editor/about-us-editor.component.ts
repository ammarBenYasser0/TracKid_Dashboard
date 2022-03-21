import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-about-us-editor',
  templateUrl: './about-us-editor.component.html',
  styleUrls: ['./about-us-editor.component.scss'],
})
export class AboutUsEditorComponent implements OnInit {
  constructor(private aboutUsService: AboutUsService) {}

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
    content: new FormControl(),
  });

  ngOnInit(): void {
    // this.aboutUsService.getContent();
    this.aboutUsForm.controls['content'].setValue(
      this.aboutUsService.getContent()
    );
  }

  onSubmit() {
    console.log(this.aboutUsForm.value);
  }
}
