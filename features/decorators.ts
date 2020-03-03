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
  console.log('Target: =', target);
  console.log('key: =', key);
}
