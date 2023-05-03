import { Component, Input } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent {
  @Input() notes: Notes | null = null;
}
