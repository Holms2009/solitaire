type TCardValues = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
type TCardSuits = 'hearts' | 'spades' | 'diamonds' | 'clubs';

type TCard = {
  color: 'red' | 'black';
  value: TCardValues;
  suit: TCardSuits,
}