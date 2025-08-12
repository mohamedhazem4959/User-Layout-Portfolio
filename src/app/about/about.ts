import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAbout, IAboutResponse } from '../i-about';
import { AboutS } from '../about';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
  about?:IAbout;

  constructor(private _aboutS: AboutS){}

  ngOnInit(): void {
    this._aboutS.getAbout().subscribe({
      next: data => {
        console.log('mapped about' , data)
        this.about = data[0]?.About
      },
      error:err =>{
        console.log('api error',err)
      }
    })
  }
  
}
