class Boat {
  color = 'blue';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot():void {
    throw new Error();
    console.log('swim');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Ooops, boat was sunk');
    }
  }
}

new Boat().pilot();
