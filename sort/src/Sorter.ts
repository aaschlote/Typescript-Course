import { NumbersCollection } from './NumbersCollection';

export abstract class Sorter {
  abstract get length(): number;
  abstract compare(leftIndex: number, right: number): boolean;
  abstract swap(leftIndex: number, right: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}