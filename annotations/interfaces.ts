interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 400,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: IReportable): void => {
  console.log('--------------------------------');
  console.log('*** summary =>  ', item.summary());
};

printSummary(oldCivic);
printSummary(drink);
