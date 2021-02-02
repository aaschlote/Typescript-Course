import 'reflect-metadata';

/*const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');
console.log(note);

Reflect.defineMetadata('note', 'hi there', plane);

const note = Reflect.getMetadata('note', plane);
console.log(note);
*/

@controller
class Plane {
  color: string = 'red';

  @get('hi there')
  fly(): void {
    console.log('vrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('path', target.prototype, key);
    console.log(secret);
  }
}
