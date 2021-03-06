class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats colors is ${this.color}`;
  }

  @logError('Oops boat was wrong')
  pilot(): void {
    throw new Error();
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
}

function logError(errorMessage: string) {
  return function logError(
    target: any,
    key: string,
    desc: PropertyDescriptor
  ): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
