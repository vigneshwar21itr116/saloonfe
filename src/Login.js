import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields'); 
      return;
    }

    try {
      const response = await fetch('/coachlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
   
        alert('Login Successfully');
      
      } else {
        alert('Invalid username or password'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.'); 
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://img.freepik.com/premium-photo/ultra-hd-4k-blue-abstract-background-desktop-wallpaper_963876-1323.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais')`,
    backgroundSize: 'cover',
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '400px',
    minHeight: '300px',
    padding: '2rem',
    color: 'black',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
  };

  const inputStyle = {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
    width: '100%',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  

  

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div className="col-md-12">
          <h3 className="card-title text-center">
            <img
              src="https://in.images.search.yahoo.com/images/view;_ylt=Awrx.VPrZC9lHcATxN29HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzllMGQyZmNmOGEzYTQyOTljMmQ0MjU2Y2IzNzA0Njc0BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dhaircut%2Blogo%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1472&h=1107&imgurl=getdrawings.com%2Fimages%2Fhair-clipper-drawing-20.jpg&rurl=http%3A%2F%2Fgetdrawings.com%2Fhair-clipper-drawing&size=100.1KB&p=haircut+logo&oid=9e0d2fcf8a3a4299c2d4256cb3704674&fr2=piv-web&fr=mcafee&tt=Hair+Clipper+Drawing+at+GetDrawings+%7C+Free+download&b=0&ni=21&no=2&ts=&tab=organic&sigr=WDfQX7pucr8h&sigb=ggvTS0eKqDL9&sigi=65igV7mutrAj&sigt=2B34k1qE6HMl&.crumb=13bj3TQCXE.&fr=mcafee&fr2=piv-web&type=E211IN826G0"
              alt="Logo"
              width="100"
            />
          </h3>
          <form onSubmit={handleLogin} className="login">
            <div style={inputContainerStyle}>
              <i className="fa fa-envelope" style={iconStyle}></i>
              <input
                type="text"
                id="username"
                name="username"
                style={inputStyle}
                required
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={inputContainerStyle}>
              <i className="fa fa-lock" style={iconStyle}></i>
              <input
                type="password"
                id="password"
                name="password"
                style={inputStyle}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />{' '}
                Remember Me
              </label>
            </div>
           
            <div className="mb-3 text-center">
              <button style={buttonStyle} type="submit">
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;