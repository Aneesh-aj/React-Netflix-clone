
import Row from './componant/Row'
import './App.css'
import request from './request'
import Banner from './componant/Banner'
import Nav from './componant/Nav'
function App() {

  return (
      <div className="App">
          <Nav/>
          <Banner/>
           <Row title="Netflixoriginal" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
           <Row title="Trending Now" fetchUrl={request.fetchTrending }></Row>
           <Row title="Top tated" fetchUrl={request.fetchTopRated}></Row>
           <Row title="Action Movie" fetchUrl={request.fetchActionMovies }></Row>
           <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies }></Row>
           <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies }></Row>
           <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies }></Row>
           <Row title="Documentaries" fetchUrl={request.fetchDocumentaries }></Row>

      </div>
  )
}

export default App
