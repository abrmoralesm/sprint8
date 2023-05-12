import { THEME } from "./lib/constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Capçalera from "./components/Capçalera/Capçalera";
import Navegador from "./components/Navegador/Navegador";
import Router from "./modules/Router";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <header>
        <Capçalera />
        <Navegador />
      </header>
      <main>
        <Router />
      </main>
     
      <Footer/> 
      
    </ThemeProvider>
  );
}

export default App;
