import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';

// strapi functions
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';

const Login = () => {

  const history = useHistory();
  const { userLogin, alert, showAlert } = useContext(UserContext);

  //state values 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(true);
  // const [forgotPassword, setForgotPassword] = useState(false);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    //initial value of state = prevMember = true
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    })

  }

  const handleSubmit = async (e) => {
    showAlert({ msg: `Please wait, accessing user's data...` })
    //alert
    e.preventDefault();
    let response;

    if (isMember) {
      response = await loginUser({ email, password })
    }
    else {
      response = await registerUser({ email, password, username })
    }

    if (response) {
      const { jwt: token, user: { username } } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ msg: `Successfully logged in ${username}, Thank you` })
      history.push('/products')
      // console.log(response)
    } else {
      //show alert
      showAlert({ msg: 'There was an error, please try again...', type: 'danger' })
    }
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
          {isMember ? "need to register" : "already a member ?"}
          <button type="button" onClick={toggleMember}>Click here</button>
        </p>
        {/* <p className="register-link">
          {isMember ? "forgot password" : "already a member ?"}
          <button type="button" onClick={() => { setForgotPassword(true) }}>Click here</button>
        </p> */}
      </form>
    </section>
  );
}

export default Login