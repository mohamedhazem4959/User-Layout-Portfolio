import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactS } from '../contact-s';
import { Icontact } from '../icontact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit{

  Contact?:Icontact;
  constructor(private _contact: ContactS){ }

  ngOnInit(): void {
    this._contact.getContact().subscribe({
      next: data =>{
        this.Contact = data[0]
      }
    })
  }
  debug(item:any){
    console.log(item);
    
  }
}
