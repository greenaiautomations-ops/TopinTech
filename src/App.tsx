import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Site from "./brand/Site";
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </HelmetProvider>
  );
}
