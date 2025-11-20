import { useState } from 'react'
import '../index.css'
import Inputs from '../components/ui/inputs.jsx'
import { UserAuth } from '../context/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [firstname, setFirstName] = useState('')
  const [famillyname, setFamillyname] = useState('')
  const [birthdate, setBirthdate] = useState('') // Changed from null to empty string
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false) // Changed from empty string to boolean

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate()
  
  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      console.log(" other thing")
      const result = await signUpNewUser(email, firstname, famillyname, birthdate, number, password)
      console.log(" awit true")
      if (result.success) {
        console.log(" nav true")
        navigate('/dashboard')
      } else {
        setError(result.error || "Sign up failed")
      }
    } catch (error) {
      setError("An error occurred during sign up")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-50 flex-col max-w-sm w-full gap-4 p-8 rounded-2xl shadow-md sm:items-center sm:gap-6 sm:py-4 m-auto">
      <div>
        <h1 className="text-2xl font-bold mb-4">Sign up</h1> {/* Changed from "Sign in" to "Sign up" */}
      </div>

      <form onSubmit={handleSignUp}>
        <Inputs 
          type="text"
          placeholder="enter your first name"
          label="First name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)} // ✅ Fixed: e.target.value
        />
        <Inputs
          type="text"
          placeholder="enter your familly name"
          label="Familly name"
          value={famillyname}
          onChange={(e) => setFamillyname(e.target.value)} // ✅ Fixed: e.target.value
        />
        <Inputs
          type="date"
          placeholder="date"
          label="Date of birth"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)} // ✅ Fixed: e.target.value
        />
        <Inputs
          type="email"
          placeholder="enter your Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ✅ Fixed: e.target.value
        />
        <Inputs
          type="text"
          placeholder="Your mobile number"
          label="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)} // ✅ Fixed: e.target.value
        />
        
        <Inputs
          type="password"
          placeholder="choose ur password"
          label="pass word"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // ✅ Fixed: e.target.value
        />
        
        <div className="mt-4">
          <button 
            type="submit"
            disabled={loading}
            className="h-7 align-text-top border-2 border-b-0 border-t-0 bg-white text-black px-4 py-0 rounded hover:text-white btn-border-reveal disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Sign up'} {/* Changed from "Sign in" to "Sign up" */}
          </button>
          {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
        </div>
      </form>
      
      <Link to="/login" className="text-blue-500 hover:text-blue-700">
        Log in
      </Link>
    </div>
  )
}

export default Signup