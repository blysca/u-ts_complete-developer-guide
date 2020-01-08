import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

/*const numbersCollection1 = new NumbersCollection([10, -2, 5, 45, 1, 0, 5, 1, -4]);
const numbersCollection2 = new NumbersCollection([30, 10, 0, -5]);
numbersCollection1.sort();
numbersCollection2.sort();

console.log(numbersCollection1.data);
console.log(numbersCollection2.data);*/

/*const charactersCollection = new CharactersCollection('XaaZyob');
charactersCollection.sort();
console.log(charactersCollection.data);*/

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(30);
linkedList.add(-50);
linkedList.add(-5);
linkedList.add(3);

linkedList.sort();
linkedList.print();
