import { Component } from '@angular/core';
import { Notes } from '../notes';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  notes: Notes[] = NOTES;
  selectedNote: Notes | null = null;

  getNote(note: Notes){
    this.selectedNote = note;
  }
}
