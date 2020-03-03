@classDecorator
class Boat {
  @testDecorator
  color = 'blue';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Ooops, boat was...')
  pilot(
    @parametrDecorator speed: string,
    @parametrDecorator generateWake:boolean
  ):void {
    if (speed === 'fast') {
      console.log('swim');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: Function) {
  console.log('constructor: = ', constructor);

}

function parametrDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('key: = ', key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}

// new Boat().pilot();
