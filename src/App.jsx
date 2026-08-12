import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import FreshcartProject from './Components/FreshcartProject/FreshcartProject'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Notfound from './Components/Notfound/Notfound'
import Loader from './Components/Loader/Loader'
import DrugcheckerProject from './Components/DrugcheckerProject/DrugcheckerProject'
import BazarProject from './Components/BazarProject/BazarProject'
import IkeaProject from './Components/IkeaProject/IkeaProject'
import MMADLProject from './Components/MMADLProject/MMADLProject'
import YummyProject from './Components/YummyProject/YummyProject'

let routers = createBrowserRouter([{
  path:'/',element:<Layout/>, children:[
    {index: true , element:<Home/>},
    {path:'projects/freshcartproject', element:<FreshcartProject/>},
    {path:'projects/drugcheckerproject', element:<DrugcheckerProject/>},
    {path:'projects/bazarproject', element:<BazarProject/>},
    {path:'projects/ikeaproject', element:<IkeaProject/>},
    {path:'projects/mmadlproject', element:<MMADLProject/>},
    {path:'projects/yummyproject', element:<YummyProject/>},
    {path:'projects', element:<Projects/>},
    {path:'about',element:<About/>},
    {path:'*' , element:<Notfound/>}
  ]
}])

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 7200);

    return () => clearTimeout(timer);
  }, []);

  return <>
  {showLoader ? <div className=' overflow-hidden'><Loader/></div> :<RouterProvider router={routers}></RouterProvider>}
  </>
}

export default App