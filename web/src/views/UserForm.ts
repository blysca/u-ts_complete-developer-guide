export class UserForm {
  constructor(public  parent: Element) {
  }

  eventMap(): { [key: string]: () => void } {
    return {
      'button:click': this.onButtonClick
    };
  }

  onButtonClick(): void {
    console.log('-- hello');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text" placeholder="Enter your value" />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
