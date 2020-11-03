import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
      <Row title="Si-Fi Movie" fetchUrl={requests.fetchSciFi}/>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation}/>
      <Row title="Western Movies" fetchUrl={requests.fetchWestern}/>
    </div>
  );
}

export default App;
