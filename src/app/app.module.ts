import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesDetailsComponent } from './Note/notes-details/notes-details.component';
import { FormsModule } from '@angular/forms';
import { NotesListComponent } from './Note/notes-list/notes-list.component';
import { NotesCategoryPipe } from './Note/notes-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesDetailsComponent,
    NotesListComponent,
    NotesCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
