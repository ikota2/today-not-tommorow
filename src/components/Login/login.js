import React from "react";
// import { Link, withRouter } from "react-router-dom";
import "./login.css";

export function Login() {
  //   const links = ["/login", "/home"];
  //   const currentLocationIndex = links.findIndex(
  //     (link) => link === location.pathname
  //   );
  //   const nextLink = links[currentLocationIndex + 1];
  return (
    <div className='login'>
      <form className='login__form'>
        <input
          type='text'
          name='login__input'
          id='login__input-id'
          className='login__input-login'
          placeholder='login or e-mail'
          required=''
        />
        <input
          type='password'
          name='login__input'
          id='login__input-id'
          className='login__input-password'
          placeholder='password'
          required=''
        />
        <button className='login__button'>
          enter
          {/* <Link to={nextLink}></Link> */}
        </button>
      </form>
    </div>
  );
}
