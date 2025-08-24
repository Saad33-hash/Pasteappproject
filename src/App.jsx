
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pastes from './Components/Pastes';
import ViewPaste from './Components/ViewPaste';
import './App.css'



function App() {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
      <Navbar/>
      <Home/>
        </div>
      },
      {
        path:"/Pastes",
        element:
        <div>
          <Navbar/>
          <Pastes/>
        </div>
      },
      {
         path:"/Viewpaste/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>

      }
    ]
  );


  return (
    <>
      <div>
      <RouterProvider router={router} />
       
      </div>
      
     
    </>
  )
}

export default App
