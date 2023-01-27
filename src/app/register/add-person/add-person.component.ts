import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaffleService } from 'src/app/shared/services/raffle.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  personForm!: FormGroup;
  isAdded: boolean = false;

  constructor(private fb: FormBuilder, private raffleService: RaffleService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.personForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.raffleService.addPerson(this.personForm.value).subscribe((res) => {
      if (res.id) {
        this.isAdded = true;
        this.personForm.reset();
      }
      setTimeout(() => {
        this.isAdded = false;
      }, 2000);
    });
  }

  clearForm() {
    this.personForm.reset();
  }
}
