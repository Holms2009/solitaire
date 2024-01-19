import classNames from 'classnames';
import styles from './Card.module.scss';

import spades from '../../assets/images/spades.svg';
import clubs from '../../assets/images/clubs.svg';
import hearts from '../../assets/images/hearts.svg';
import diamonds from '../../assets/images/diamonds.svg';

type TCardProps = {
  value?: TCardValues,
  suit?: TCardSuits,
  opened?: boolean
}

export function Card({ value, suit, opened = false }: TCardProps) {
  return (
    <div className={classNames(styles.wrapper, { [styles.closed]: !opened })}>
      <div>
        <div className={styles.value}>
          <span className={styles.text}>{value}</span>
          <img className={styles.image} src={getSuitImg(suit)} alt={suit} />
        </div>
      </div>
      <div className={styles.middle}>
        <img className={styles.image} src={getSuitImg(suit)} alt={suit} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.value}>
          <span className={styles.text}>{value}</span>
          <img className={styles.image} src={getSuitImg(suit)} alt={suit} />
        </div>
      </div>
    </div>
  )
}

function getSuitImg(name?: TCardSuits) {
  switch (name) {
    case 'clubs':
      return clubs;
    case 'hearts':
      return hearts;
    case 'spades':
      return spades;
    case 'diamonds':
      return diamonds;
    default:
      return;
  }
}