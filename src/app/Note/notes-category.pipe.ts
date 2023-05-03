import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notesCategory'
})
export class NotesCategoryPipe implements PipeTransform {

  transform(category: string): string {
    let color: string = "#000";

    switch (category) {
      case 'code':
        color = 'red';
        break;
      case 'cuisine':
        color = 'orange';
        break;
      case 'personel':
        color = 'blue';
        break;
    }

    return color;
  }
}
