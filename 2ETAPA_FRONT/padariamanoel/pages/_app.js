import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../componentes/Header/Header";
import { SSRProvider, Container} from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header></Header>
      <Container fluid className="mt-3">
      <Component {...pageProps} />
      </Container>
      
    </SSRProvider>
  );
}

export default MyApp;
