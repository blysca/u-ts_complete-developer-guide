class Boat {
  color = 'blue';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Ooops, boat was...')
  pilot():void {
    throw new Error();
    console.log('swim');
  }
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

new Boat().pilot();
