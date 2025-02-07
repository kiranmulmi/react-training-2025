import './assets/css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {

  const fullName = "John Doe";

  return(
    <div>
      <Header />
      <div className="v-row main-wrapper">
        <Sidebar/>
        <div className="v-col main-body">
          Body
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default App;

