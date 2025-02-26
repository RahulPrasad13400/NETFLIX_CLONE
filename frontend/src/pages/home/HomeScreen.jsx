import { useAuthStore } from '../../store/authUser'
import Navbar from '../../components/NavBar'
  
export default function HomeScreen() {

  const { logout } = useAuthStore()

  return (
    <>
    <div className='relative h-screen text-white '>
      <Navbar />
      HOME SCREEN 
      <button onClick={logout}>Log out</button>
    </div>
    </>
  )
}
