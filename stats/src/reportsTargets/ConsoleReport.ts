import { OutPutTarget } from '../Summarry';

export class ConsoleReport implements OutPutTarget {
  print(report: string): void {
    console.log(report);
  }
}
