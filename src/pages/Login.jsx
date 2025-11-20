import { useState } from 'react'
import '../index.css'
// import '../../App.css'
import Inputs from '../components/ui/inputs.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext.jsx'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const togglePassword = (e) => { // Added e parameter to prevent form submission
    e.preventDefault();
    setShowPassword(!showPassword)
  }
  
  
    const { signInUser } = UserAuth();
  const navigate = useNavigate();
    

  const handleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await signInUser({email, password})
      if (result.success) {
        navigate('/dashboard')
      } else {
        setError(result.error || "Sign In failed")
      }
    } catch (error) {
      setError("An error occurred during sign In")
    } finally {
      setLoading(false)
    }
  }


  return (
    // ✅ Parent container centers horizontally
    <div className="flex m-auto justify-center items-center bg-gray-50 flex-col max-w-sm w-full gap-4 p-8 rounded-2xl shadow-md sm:items-center sm:gap-6 sm:py-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Log in</h1>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)} // ✅ Fixed: e.target.value
              />

            <label className="font-medium mt-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

        <div className="mt-4">
          <button 
            type="submit"
            disabled={loading}
            className="h-7 align-text-top border-2 border-b-0 border-t-0 bg-white text-black px-4 py-0 rounded hover:text-white btn-border-reveal disabled:opacity-50"
            >
            {loading ? 'Loging IN...' : 'Log In'}
          </button>
          {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
        </div>
            </form>
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Sign up
        </Link>
    </div>
  )
}

export default Login
