import { useAppContext } from '@app';
import styles from './CardsInGame.module.scss';
import { Card } from '@components';

export function CardsInGame() {
  const { cardsStack, fieldCards, setFieldCards } = useAppContext();

  return (
    <div className={styles.wrapper}>
      {fieldCards?.map((row, index) => (
        <div className={styles.cardsRow} key={index}>
          {row.map((card) => (
            <Card suit={card.suit} value={card.value} opened={card === row.at(-1)} key={card.value + card.suit} />
          ))}
        </div>
      ))}
    </div>
  )
}