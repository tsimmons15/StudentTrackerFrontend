import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';


import Navigation from './components/navigation/navigation';
import { SeatingStore } from './stores/exam-store';

function App() {



  return (
    <>
      <Provider store={SeatingStore}>
        <Navigation />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
