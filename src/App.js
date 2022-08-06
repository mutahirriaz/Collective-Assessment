import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from "../src/components/Header"
import FirstSection from "../src/components/firstSection/index"
import SecondSection from "./components/secondSection/index"
import "antd/dist/antd.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
