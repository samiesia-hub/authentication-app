import { useState } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext.jsx'


function Dashboard() {
  const navigate = useNavigate();
  const { session, signOut } = UserAuth();

  const handleSignOut = async(e) =>{
    e.preventDefault()
    try {
      await signOut()
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    // ✅ Parent container centers horizontally
    <div className="m-auto flex justify-center items-center bg-gray-50 flex-col max-w-sm w-full gap-4 p-8 rounded-2xl shadow-md sm:items-center sm:gap-6 sm:py-4">
        <div>
            <h1>hello {session.user.user_metadata.firstname}</h1>
        </div>
      <Link to="/" onClick={handleSignOut} className="text-blue-500 hover:text-blue-700">
        sign out
      </Link>
    </div>
  )
}

export default Dashboard
