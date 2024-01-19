export function createCardsStack(): TCard[] {
  const cardValues: TCardValues[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cardSuits: TCardSuits[] = ['hearts', 'spades', 'diamonds', 'clubs'];
  const stack: TCard[] = [];

  for (let i = 0; i < 52; i += 1) {
    const suitIndex = Math.floor(i / 13);
    const card: TCard = {
      color: cardSuits[suitIndex] === 'diamonds' || cardSuits[suitIndex] === 'hearts' ? 'red' : 'black',
      value: cardValues[i % 13],
      suit: cardSuits[suitIndex]
    }

    stack.push(card);
  }

  return shuffleStack(stack);
}

function shuffleStack(arr: TCard[]) {
  const result = [...arr];

  for (let i = result.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function dealCards(cards: TCard[]) {
  const source = [...cards];
  const result = [];

  for (let i = 1; i <= 7; i += 1) {
    result.push(source.splice(0, i));
  }

  return result;
}