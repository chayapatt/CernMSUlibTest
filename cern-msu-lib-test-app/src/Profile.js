import {Link} from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <>
      <div className='navbar'>
        <Link to="/home">Go Home</Link>
      </div>
      <div className='profile'>
        <h1>Profile Page</h1>
        <img src={process.env.PUBLIC_URL + "/profileIcon2.png"} />
        <p>Username: {localStorage.getItem('name')}</p>
        <p>Email: ct1353@msstate.edu</p>
        <p>Phone: (662)231-5241</p>
        <p>Bio: I like to play sports, musical instruments, and the color orange.</p>
        <button className="editProfileBtn">Edit Profile</button>
      </div>
    </>
  );
}

export default Profile;
