class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vrom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car3 = new Car2(4, 'orange');
car3.startDrivingProcess();
console.log(car3.color);
