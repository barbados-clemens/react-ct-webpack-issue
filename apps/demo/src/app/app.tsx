// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { BuildableLib } from '@react-ct-webpack-issue/buildable-lib';

export function App() {
  return (
    <div>
      <NxWelcome title="demo" />
      <BuildableLib />
    </div>
  );
}

export default App;
