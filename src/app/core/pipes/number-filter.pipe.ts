import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFilter'
})
export class NumberFilterPipe implements PipeTransform {
  transform(value: string): string {
    // 移除所有非數字字符，只保留數字
    const filteredValue = value.replace(/\D/g, '');
    return filteredValue;
  }
}
