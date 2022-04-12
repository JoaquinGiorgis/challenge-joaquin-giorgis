import './App.scss';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Categories from './pages/Categories';
import DataProvider from './context/DataContext';
import RecentNews from './pages/RecentNews';
import News from './pages/News';

function App(props) {
  console.log(props)
  return (
    <Router>
      <DataProvider>
        <Routes>

          <Route exact path="/" element={<Categories />} />
          <Route exact path="/recent-news" element={<RecentNews />} />
          <Route exact path="/top-rated" element={<RecentNews />} />
          <Route path="/article/:id" element={<News />} />
          <Route path="*" element={<Categories />} />

        </Routes>
      </DataProvider >
    </Router>
  );
};

export default App;
