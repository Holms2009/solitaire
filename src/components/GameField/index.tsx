import styles from './GameField.module.scss';

import { ActiveStack, CardsInGame } from '@components';

export function GameField() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <ActiveStack />
        </div>
        <div className={styles.topRight}>

        </div>
      </div>
      <div className={styles.bottom}>
        <CardsInGame />
      </div>
    </div>
  )
}