import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsS } from '../projects-s';
import { Iproject } from '../iproject';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  Projects?: Iproject;

  constructor(private _projectsS: ProjectsS) { }
  ngOnInit(): void {
    this._projectsS.getProjects().subscribe({
      next: data => {
        this.Projects = data[0]
      }
    })
  }

}
