import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modifycontentform',
  templateUrl: './modifycontentform.component.html',
  styleUrls: ['./modifycontentform.component.scss']
})
export class ModifycontentformComponent implements OnInit {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<ModifycontentformComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Content
	) {
		this.form = this.fb.group({});
	}

	ngOnInit() {
		this.form = this.fb.group({
			title: '',
			description: '',
			creator: '',
			imgURL: '',
			type: '',
			tags: '',
		});
	}

	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}
