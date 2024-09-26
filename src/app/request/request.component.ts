import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchpipePipe } from '../searchpipe.pipe';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [FormsModule, SearchpipePipe],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  searchText:string="";
  cardData = [
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./assets/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./assets/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./assets/profile.jpeg" }
  ];
}