import ChooseSection from "./Component/ChooseSection/ChooseSection";
import Gallery from "./Component/Gallery/Gallery";
import Head from "./Component/Head/Head";
import Introduction from "./Component/Introduction/Introduction";
import Footer from "./Component/Footer/Footer";
import NewsLetter from "./Component/NewsLetter/NewsLetter";
import Team from "./Component/Team/Team";
import Clients from "./Component/Clients/Clients";

function App() {
  return (
    <div>
      <Head />
      <Introduction />
      <ChooseSection />
      <Gallery />
      <Clients />
      <Team />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
