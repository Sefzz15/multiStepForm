import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,  // Εδώ δηλώνεις ότι είναι standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multiStepForm';
}
