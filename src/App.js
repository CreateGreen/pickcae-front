import './styles/App.css';
import Header from './block/Header';
import Footer from './block/Footer';
import NavBar from './components/NavigationBar';
import Grid from './block/Grid';
import { Testobject } from './testObject';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const App = () => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/cake/:전체');
  }, []);

  // const testapi = async () => {
  //   const res = await axios.get('https://192.168.45.26:10003/cakes');
  //   console.log(res);
  // };

  return (
    <div className="App">
      <div className="header-space">
        <Header />
      </div>
      <section className="main-space">
        <NavBar />
        <div className="grid-wrapper">
          <h3 className="grid-subject">{param.category.substring(1)}</h3>
          <div className="grid-Imagespace">
            <Grid itemList={Testobject.imageJson} />
          </div>
        </div>
        {/* <button onClick={testapi}>test</button> */}
      </section>
      <div className="footer-space">
        <Footer />
      </div>
    </div>
  );
};

export default App;
