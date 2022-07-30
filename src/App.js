import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';


function App() {
  return (
    <div className="App">
        <Header />
        <Router>
         <Switch>
         <ScrollToTopRoute exact={true} path="/">
            <Home/>
         </ScrollToTopRoute>
         
         </Switch>
        </Router>
        <Footer/>
     
    </div>
  );
}

export default App;
