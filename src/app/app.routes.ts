import { Routes } from '@angular/router';
import { Education } from './education/education';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: About },
    { path: 'education', component: Education },
    {path: 'projects' , component:Projects},
    {path:'contact' , component:Contact}
];
