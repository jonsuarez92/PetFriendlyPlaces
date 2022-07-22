import './App.css';
import { useState } from 'react';
import Home from '../Home/Home';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {
        user ?
          <>
            <Routes>
              <Route path='/Home' element={<Home />} />
            </Routes>
          </> :
          <AuthPage />

      }
    </main>
  );
}

export default App;
