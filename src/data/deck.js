// naruto
// sasuke
// sakura
// kakashi
// shikamaru
// ino
// choji
// asuma
// hinata
// kiba e akamaru
// shino
// kurenai
// neji
// rock lee
// tenten
// gai
// gaara
// temari
// kankurou
// zabuza
// haku
// itachi
// shisui
// pain
// jiraya
// orochimaru
// tsunade
// minato
// madara
// hashirama
import cardImages from './card-images';
import naruto from './card-images/naruto.jpg';

const muitoRaro = 'muito raro';
const raro = 'raro';
const normal = 'normal';

const jouninLeaf = 'Aldeia da Folha, Jounin';

const deck = [
  {
    cardName: 'Naruto Uzumaki',
    cardDescription: 'Aldeia da Folha, Hokage',
    cardImage: naruto,
    cardRare: muitoRaro,
    cardAttr1: 90,
    cardAttr2: 50,
    cardAttr3: 70,
    cardTrunfo: true,
  },
  {
    cardName: 'Sasuke Uchiha',
    cardDescription: 'Aldeia da Folha, Nukenin',
    cardImage: cardImages.get('sasuke'),
    cardRare: muitoRaro,
    cardAttr1: 90,
    cardAttr2: 70,
    cardAttr3: 50,
    cardTrunfo: false,
  },
  {
    cardName: 'Sakura Haruno',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('sakura'),
    cardRare: muitoRaro,
    cardAttr1: 50,
    cardAttr2: 70,
    cardAttr3: 90,
    cardTrunfo: false,
  },
  {
    cardName: 'Kakashi Hatake',
    cardDescription: 'Aldeia da Folha, Hokage',
    cardImage: cardImages.get('kakashi'),
    cardRare: muitoRaro,
    cardAttr1: 70,
    cardAttr2: 70,
    cardAttr3: 70,
    cardTrunfo: false,
  },
  {
    cardName: 'Shikamaru Nara',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('shikamaru'),
    cardRare: raro,
    cardAttr1: 50,
    cardAttr2: 70,
    cardAttr3: 80,
    cardTrunfo: false,
  },
  {
    cardName: 'Chouji Akimichi',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('chouji'),
    cardRare: normal,
    cardAttr1: 71,
    cardAttr2: 70,
    cardAttr3: 52,
    cardTrunfo: false,
  },
  {
    cardName: 'Ino Yamanaka',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('ino'),
    cardRare: normal,
    cardAttr1: 42,
    cardAttr2: 52,
    cardAttr3: 40,
    cardTrunfo: false,
  },
  {
    cardName: 'Asuma Sarutobi',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('asuma'),
    cardRare: normal,
    cardAttr1: 60,
    cardAttr2: 54,
    cardAttr3: 56,
    cardTrunfo: false,
  },
  {
    cardName: 'Hinata Hyuuga',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('hinata'),
    cardRare: normal,
    cardAttr1: 45,
    cardAttr2: 56,
    cardAttr3: 24,
    cardTrunfo: false,
  },
  {
    cardName: 'Shino Aburame',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('shino'),
    cardRare: normal,
    cardAttr1: 56,
    cardAttr2: 48,
    cardAttr3: 56,
    cardTrunfo: false,
  },
  {
    cardName: 'Kurenai Yuuhi',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('kurenai'),
    cardRare: normal,
    cardAttr1: 40,
    cardAttr2: 32,
    cardAttr3: 32,
    cardTrunfo: false,
  },
  {
    cardName: 'Neji Hyuuga',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('neji'),
    cardRare: normal,
    cardAttr1: 64,
    cardAttr2: 64,
    cardAttr3: 48,
    cardTrunfo: false,
  },
  {
    cardName: 'Rock Lee',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('rock-lee'),
    cardRare: normal,
    cardAttr1: 72,
    cardAttr2: 48,
    cardAttr3: 56,
    cardTrunfo: false,
  },
  {
    cardName: 'Tenten',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('tenten'),
    cardRare: normal,
    cardAttr1: 32,
    cardAttr2: 24,
    cardAttr3: 32,
    cardTrunfo: false,
  },
  {
    cardName: 'Gai',
    cardDescription: jouninLeaf,
    cardImage: cardImages.get('gai'),
    cardRare: normal,
    cardAttr1: 90,
    cardAttr2: 80,
    cardAttr3: 72,
    cardTrunfo: false,
  },
];

export default deck;
