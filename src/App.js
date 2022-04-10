import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import MailList from './components/MailList';
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter className="App">
      <div>
        <Header />

        <div className="app_body">
          <Sidebar />

          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<MailList />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
}

export default App;


// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Reset from "./Reset";
// import Dashboard from "./Dashboard";
// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Login />} />
//           <Route exact path="/register" element={<Register />} />
//           <Route exact path="/reset" element={<Reset />} />
//           <Route exact path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;