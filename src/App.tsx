import React from 'react';
import { Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='wrapper'>
      <aside>
        <img
          src='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024,h_768/https://globalhelpswap.com/wp-content/uploads/2019/09/Things-to-do-in-Trentino-24-1024x768.jpg'
          alt='nature_icon'
        />
      </aside>
      <main>
        <section>
          <h1>Log In</h1>
          <p>
            If you don`t have an account yet, please <Link to='#'> register </Link>
            first.
          </p>
        </section>
        <form onSubmit={e => e.preventDefault()}>
          <input type='email' name='email' placeholder='Your e-mail' />
          <input type='password' name='password' placeholder='Your password' />
          <Link to='#'>I forgot my password</Link>
          <label htmlFor='remember_me'>
            <input type='radio' id='remember_me' value='Remember me' />
            &nbsp; Remember me
          </label>
          <input type='submit' value='Log in' className='form_submit' />
        </form>
      </main>
    </div>
  );
}

export default App;
