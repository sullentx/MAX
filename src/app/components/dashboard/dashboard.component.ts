import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from '../main-section/main-section.component'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule, 
    CommonModule,
    MainSectionComponent 
  ]
})
export class DashboardComponent {
  items: string[] = []; 
  itemForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required]
    });
  }

  addItem(): void {
    if (this.itemForm.valid) {
      this.items.push(this.itemForm.value.itemName);
      this.itemForm.reset();
    }
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
