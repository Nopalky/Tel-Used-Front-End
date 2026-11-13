import { RouterProvider } from 'react-router';
import router from './router'

function App() {
  // return <RegisterPage />;
  return <RouterProvider router={router} />
}

export default App;
