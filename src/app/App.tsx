import styles from './App.module.scss';

import { GameField } from '@components';
import { AppContextProvider } from './context';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppContextProvider>
          <GameField />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
