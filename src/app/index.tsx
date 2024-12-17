import { Providers } from './providers';
import { AppRouting } from './routes';

const App = () => {
  return (
    <Providers>
      <AppRouting />
    </Providers>
  );
};

export default App;
