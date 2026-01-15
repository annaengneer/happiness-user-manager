import { AppRouter } from './router/AppRouter';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;
