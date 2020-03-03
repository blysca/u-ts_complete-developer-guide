class Boat {
  color = 'blue';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot():void {
    console.log('swim');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target: =', target);
  console.log('key: =', key);
}
