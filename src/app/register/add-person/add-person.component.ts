import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Person } from 'src/app/models/person';
import { RaffleService } from 'src/app/shared/services/raffle.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  userForm!: FormGroup;
  isAdded: boolean = false;
  isButtonDisable: boolean = false;

  constructor(private fb: FormBuilder, private raffleService: RaffleService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get fullname() {
    return this.userForm.get('fullname') as FormControl;
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  onSubmit() {
    this.isButtonDisable = true;
    this.raffleService.addPerson(this.userForm.value).subscribe((res) => {
      if (res.id) {
        this.isAdded = true;
        this.isButtonDisable = false;
        this.userForm.reset();
      }
      setTimeout(() => {
        this.isAdded = false;
      }, 2000);
    });
  }

  clearForm() {
    this.userForm.reset();
  }
}
