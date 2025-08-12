import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EducationS } from '../education-s';
import { IEducation } from '../ieducation';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit{
  education?:IEducation

  constructor(private _educationS: EducationS){ }

  ngOnInit(): void {
    this._educationS.getEducation().subscribe({
      next: data =>{
        this.education = data[0]
      }
    })
  }

}
