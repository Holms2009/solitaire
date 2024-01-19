import { PropsWithChildren, createContext, useContext } from 'react';

import { createCardsStack, dealCards } from '@shared/lib/utils';
import { create } from 'zustand';

type TGameContext = {
  cardsStack: TCard[],
  activeCard: TCard | null,
  fieldCards: TCard[][] | null,
  setActiveCard: (arg0: TCard) => void,
  setFieldCards: (arg0: TCard[][]) => void
}

const Context = createContext<TGameContext | null>(null);
const context = createContextStore();

export function AppContextProvider({ children, ...props }: PropsWithChildren) {
  return (
    <Context.Provider value={context()}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  const context = useContext(Context);

  if (!context) throw new Error('Use app context within provider!');

  return context;
}

function createContextStore() {
  const cardsStack = createCardsStack();
  const fieldCards = dealCards(cardsStack.splice(0, 28));

  const contextStore = create<TGameContext>((set) => ({
    cardsStack,
    activeCard: null,
    fieldCards,
    setActiveCard: (card: TCard) => set({ activeCard: card }),
    setFieldCards: (cards: TCard[][]) => set({ fieldCards: cards })
  }))

  return contextStore;
}