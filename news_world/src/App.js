import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav1 from './components/navbar';
import News from './components/redux';
import Country from './components/country';
function App() {
  return (
    <div className="App">
        <div className="heading">
        <h1>News World</h1>
        <Nav1 />
        </div>
        <Routes>
            <Route path = '/business' element = {<News category = 'business'/>}></Route>
            <Route path = '/entertainment' element = {<News category = 'entertainment'/>}></Route>
            <Route path = '/general' element = {<News category = 'general'/>}></Route>
            <Route path = '/health' element = {<News category = 'health'/>}></Route>
            <Route path = '/science' element = {<News category = 'science'/>}></Route>
            <Route path = '/sports' element = {<News category = 'sports'/>}></Route>
            <Route path = '/technology' element = {<News category = 'technology'/>}></Route>
            <Route path = '/everything' element = {<News category='everything'/>}></Route>
        
            <Route path = '/united_arab_emirates' element = {<Country name='ae'/>}></Route>
            <Route path = '/australia' element = {<Country name='au'/>}></Route>
            <Route path = '/belgium' element = {<Country name='bg'/>}></Route>
            <Route path = '/brazil' element = {<Country name='br'/>}></Route>
            <Route path = '/switzerland' element = {<Country name='ch'/>}></Route>
            <Route path = '/china' element = {<Country name='cn'/>}></Route>
            <Route path = '/united_kindom' element = {<Country name='gb'/>}></Route>
            <Route path = '/hong_kong' element = {<Country name='hk'/>}></Route>
            <Route path = '/indonesia' element = {<Country name='id'/>}></Route>
            <Route path = '/india' element = {<Country name='in'/>}></Route>
            <Route path = '/japan' element = {<Country name='jp'/>}></Route>
            <Route path = '/portugal' element = {<Country name='pt'/>}></Route>
            <Route path = '/saudi_arabia' element = {<Country name='sa'/>}></Route>
            <Route path = '/united_states_of_america' element = {<Country name='us'/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
