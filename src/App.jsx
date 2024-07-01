import "./App.css";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer";
import Padre from "./components/Padre";
import TextButtons from "./components/Buttons/TextButtons";

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
        <TextButtons></TextButtons>
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
