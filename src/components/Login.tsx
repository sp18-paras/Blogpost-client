import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const baseUrl:string ="http://localhost:3000"
  const  [userData, setuserData] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleSubmit =async(e:React.FormEvent<HTMLFormElement>) =>{ 
      e.preventDefault();
      const Auth = await axios.post(`${baseUrl}/login`,userData)
      try {
        if(Auth.data.success){
          alert(Auth.data.message)
          navigate("/home")
        }
        else{
          alert(Auth.data.message)
        }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
    <div className="container py-3">
      <form onSubmit={handleSubmit}>
        <h1 className="py-2">Welcome to the Login Page</h1>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            value={userData.email}
            onChange={(e)=>{setuserData({...userData ,email:e.target.value})}}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={userData.password}
            onChange={(e)=>{setuserData({...userData,password:e.target.value})}}
          />
        </div>
        <button type='submit' className='btn btn-primary' >
          Submit
        </button >
      </form>
      </div>
    </>
  )
}

export default Login
