import React from 'react'
import'./Signup.css'

const Signup = () => {
  return (
    <div className='wrapper'>
        <form action='#'>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='Email' placeholder='Email' required></input>
                <i class='bx bxs-user'></i>
            </div>
            <div className='input-box'>
                <input type='Password' placeholder='Password' required></input>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/> Remember me </label>
                <a href='#'>Forgot Password</a>
            </div>
            <button type='submit' className='btn'>Login</button>
            <div className='register-link'>
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
        </form>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi pariatur fugit sequi nulla perspiciatis asperiores necessitatibus earum aperiam. Ipsam fugiat nihil aliquid tenetur consectetur fuga harum, temporibus similique obcaecati.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi pariatur fugit sequi nulla perspiciatis asperiores necessitatibus earum aperiam. Ipsam fugiat nihil aliquid tenetur consectetur fuga harum, temporibus similique obcaecati.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi pariatur fugit sequi nulla perspiciatis asperiores necessitatibus earum aperiam. Ipsam fugiat nihil aliquid tenetur consectetur fuga harum, temporibus similique obcaecati.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi pariatur fugit sequi nulla perspiciatis asperiores necessitatibus earum aperiam. Ipsam fugiat nihil aliquid tenetur consectetur fuga harum, temporibus similique obcaecati.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi pariatur fugit sequi nulla perspiciatis asperiores necessitatibus earum aperiam. Ipsam fugiat nihil aliquid tenetur consectetur fuga harum, temporibus similique obcaecati.</p>
      
    </div>
  )
}

export default Signup
