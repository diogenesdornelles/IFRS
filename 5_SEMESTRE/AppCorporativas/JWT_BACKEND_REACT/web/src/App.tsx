import AuthProvider from './providers/AuthProvider';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
export default App;