import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddMember from './component/AddMember';
import Home from './component/Home';
import GetMember from './component/GetMember';
import EditMember from './component/EditMember';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addMember" element={<AddMember />} />
            <Route path="/getMember" element={<GetMember/>}/>
            <Route path="/editMember/:id" element={<EditMember/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
