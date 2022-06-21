import styles from './styles.module.css'
import { Routes, Route, NavLink } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Featurespage from './pages/Featurespage';
import Contactspage from './pages/Contactspage';

function App() {
   let activePageStyle = {
      color: 'white',
      borderBottom: '3px solid',
      textDecoration: "none",
   };

   return (
      <div className={styles.main}>
         <div className={styles.header_conteiner} >
            <div className={styles.text}>
               <h1>Cover</h1>
            </div>
            <header >
               <NavLink to="/"
                  style={({ isActive }) => (isActive ? activePageStyle : undefined)}
               >
                  Home
               </NavLink>
               <NavLink to='/featurespage'
                  style={({ isActive }) => (isActive ? activePageStyle : undefined)}
               >
                  Features
               </NavLink>
               <NavLink to='/contactspage'
                  style={({ isActive }) => (isActive ? activePageStyle : undefined)}
               >
                  Contacts
               </NavLink>
            </header>
         </div>

         <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/featurespage' element={<Featurespage />} />
            <Route path='/contactspage' element={<Contactspage />} />
         </Routes>

         <footer>
            <div className={styles.footer}>
               Cover template for <span>Bootstrap</span>, by <span>@mdo</span>
            </div>
         </footer>
      </div>

   );
}

export default App;
