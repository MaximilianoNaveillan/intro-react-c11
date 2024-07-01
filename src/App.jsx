import "./App.css";
import Header from "./components/Header/index";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Padre from "./components/Padre";

function App() {
  console.log("este es el componente App");

  return (
    <>
      {console.log(
        "este es el render donde se retornara el pseudo HTML y nunca un cod JS si no está entre '{}' "
      )}
      <Header nosotros="nosotros" home="inicio" contacto="contacto" />

      <Main>
        <Padre />
      </Main>
      <Footer />
    </>
  );
}

export default App;
