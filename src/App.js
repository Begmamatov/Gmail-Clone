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
