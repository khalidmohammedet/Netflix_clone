// custom 👉
import './Resource/custom/css/custom.css'

// components 👉
import Row from './components/Row/Row';
import requests from './Resource/requests/requests';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Row rowID='1' title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row rowID='2' title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row rowID='3' title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row rowID='4' title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row rowID='5' title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row rowID='6' title="Horro Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row rowID='7' title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row rowID='8' title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default App;