import { Pipe, PipeTransform } from '@angular/core';
//import { workerData } from 'worker_threads';

@Pipe({
  name: 'ucFirst',
})
export class UcFirstPipe implements PipeTransform {
  transform(value: string): any {
    return value
      .split(' ')
      .map(
        (word: string) =>
          ' ' + word.substring(0, 1).toUpperCase() + word.substring(1)
      )
      .join('');
  }
}
