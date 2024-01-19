import styles from './ActiveStack.module.scss';

import { useAppContext } from '@app';
import { Card } from '@components';


export function ActiveStack() {
  const { activeCard, setActiveCard, cardsStack } = useAppContext();

  function clickHandler() {
    if (!activeCard || activeCard === cardsStack.at(-1)) {
      setActiveCard(cardsStack[0]);
    } else {
      setActiveCard(cardsStack[cardsStack.indexOf(activeCard) + 1]);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.stack} onClick={clickHandler}>
        {activeCard !== cardsStack.at(-1) && <Card />}
      </div>
      <div className={styles.activeCard}>
        {activeCard && <Card value={activeCard.value} suit={activeCard.suit} opened={true} />}
      </div>
    </div >
  )
}