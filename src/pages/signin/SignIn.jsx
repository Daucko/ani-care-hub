import { Link } from 'react-router-dom';
import classes from './SignIn.module.css';
import { FaGoogle } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useRef, useState } from 'react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passRef = useRef();

  const handlePassword = () => {
    passRef.current.setAttribute(
      'type',
      passRef.current.getAttribute('type') === 'password' ? 'text' : 'password'
    );
    setShowPassword(!showPassword);
  };

  return (
    <main className="w-full bg-[#7077A1]">
      <form className={classes.myForm}>
        <Link href="#" title="Logo">
          <img src="/images/login.svg" alt="Logo" className={classes.logo} />
        </Link>
        <div className={classes.myFormRight}>
          <div className={classes.loginWelcomeRow}>
            <h1>Welcome back &#x1F44F;</h1>
            <p>Please enter your details!</p>
          </div>
          <div className={classes.inputWrapper}>
            <input
              type="email"
              id="email"
              name="email"
              className={classes.inputField}
              placeholder="Your Email"
              required
              autoComplete="off"
            />
            <label htmlFor="email" className={classes.inputLabel}>
              Email:
            </label>
            <svg
              className={classes.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
            </svg>
          </div>
          <div className={classes.inputWrapper}>
            <input
              id="password"
              type="password"
              className={classes.inputField}
              placeholder="Your Password"
              title="Minimum 6 characters at least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              required
              autoComplete="off"
              ref={passRef}
            />
            <label htmlFor="password" className={classes.inputLabel}>
              Password
            </label>

            <div onClick={handlePassword}>
              {showPassword ? (
                <FiEyeOff className={classes.inputIcon} />
              ) : (
                <FiEye className={classes.inputIcon} />
              )}
            </div>
          </div>
          <button type="submit" className={classes.myFormButton}>
            Login
          </button>
          <div className={classes.socialsRow}>
            <a href="#" title="Use Google">
              <FaGoogle />
              Log in with Google
            </a>
          </div>
          <div className={classes.myFormActions}>
            <div className={classes.myFormRow}>
              <span>Don't have an account?</span>
              <a href="#" title="Create Account">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
export default SignIn;
