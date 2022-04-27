import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


import { useStateValue } from './StateProvider';

function App() {

  // const user = null;

  const [{ user }, dispatch] = useStateValue();


  return (
    //BEM
    <div className="app">

      {
        !user ? (
          <Login />
        ) : (
          <>

            <Header />

            <div className="app__body">
              <Sidebar />

              <Feed />

              {/* Widgets */}

              <Widgets />


            </div>
          </>
        )

      }

    </div>
  );
}

export default App;
