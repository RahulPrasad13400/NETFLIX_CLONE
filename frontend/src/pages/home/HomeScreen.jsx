import React from 'react'
import { useAuthStore } from '../../store/authUser'

export default function HomeScreen() {

  const { logout } = useAuthStore()

  return (
    <div>
      HOME SCREEN 
      <button onClick={logout}>Log out</button>
    </div>
  )
}
