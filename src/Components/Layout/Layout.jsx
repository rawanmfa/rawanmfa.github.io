import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  return <>
    <div className="relative z-40">
      <Navbar />
      <Outlet></Outlet>
    </div>
  </>
}