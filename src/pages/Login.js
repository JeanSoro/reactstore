import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();


  //state values 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(true);

  let isEmpty = false;

  const toggleMember = () => {

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "Sign-In" : "Register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {/* end of single input */}

        {/* single input */}
        {!isMember &&

          <div className="form-control">
            <label htmlFor="username">username</label>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
        }
        {/* end of single input */}

        {/* empty form text */}
        {isEmpty &&

          <p className="form-empty">please fill out all form field</p>

        }
        {/* submit button */}
        {!isEmpty &&
          <button type="submit" className="btn btn-block btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        }

        {/* REGISTER LINK */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>Click here</button>
        </p>
      </form>
    </section>
  );
}

export default Login