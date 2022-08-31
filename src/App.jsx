import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from './components/Card/Card';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  heigth: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
