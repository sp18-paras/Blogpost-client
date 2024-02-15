import axios from 'axios'
const SignUp = () => {
  return (
    <>
      <div className='container py-3'>
        <form>
          <h1 className='py-2'>Welcome to the SignUp Page</h1>

          <div className='mb-3'>
            <label className='form-label'>Full Name</label>
            <input type='text' className='form-control' />
          </div>

          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Phone Number
            </label>
            <input type='number' className='form-control' />
          </div>

          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
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
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
