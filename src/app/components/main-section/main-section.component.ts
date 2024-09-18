import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule  
  ]
})
export class MainSectionComponent {
  elements: string[] = [];
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      newElement: ['', Validators.required]
    });
  }

  addElement(): void {
    if (this.addForm.valid) {
      this.elements.push(this.addForm.value.newElement);
      this.addForm.reset();
    }
  }

  removeElement(index: number): void {
    this.elements.splice(index, 1);
  }
}
