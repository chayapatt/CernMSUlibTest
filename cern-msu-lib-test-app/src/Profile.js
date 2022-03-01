import {Link} from 'react-router-dom';
import './Profile.css';
import GuideList from './GuideList';
import AddedList from './AddedList';

//Profile.js shows the user's basic information
function Profile({props}) {
  return (
    <>
      <div className='navbar'>
        <Link to="/home">Go Home</Link>
      </div>
      <div style={{display:'flex'}}>
        <div className='profile'>
          <h1>Profile Page</h1>
          <img src={process.env.PUBLIC_URL + "/profileIcon2.png"} />
          <p>Username: {localStorage.getItem('name')}</p>
          <p>Email: ct1353@msstate.edu</p>
          <p>Phone: (662)231-5241</p>
          <p>Bio: I like to play sports, musical instruments, and the color orange.</p>
          <button className="editProfileBtn">Edit Profile</button>
        </div>
        <div>
          <AddedList />
        </div>
      </div>
    </>
  );
}

export default Profile;
