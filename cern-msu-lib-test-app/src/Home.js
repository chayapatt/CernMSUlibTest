import {useEffect, useState} from 'react';
import {Navigate} from 'react-router';
import {Link, Route} from 'react-router-dom';
import GuideList from './GuideList';
import './Home.css';

function Home() {

  const name = localStorage.getItem("name");
  const [allGuide, setAllGuide] = useState(null);
  const [select, setSelect] = useState('');

  const logout = () => {
    localStorage.setItem("isLoggedin", false);
    localStorage.setItem("name", '');
  }

  useEffect(() => {
    fetch('https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=name&sort_dir=asc')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAllGuide(data);
      })
  }, []);

  const showAllGuide = () => {
      <GuideList allGuide={allGuide} title="All Guides" />
      console.log('clicked');
  }

  const handleSelect = () => {
    if(select.value == 'name'){
      fetch('https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=name&sort_dir=asc')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setAllGuide(data);
        })
      }
    else if(select.value == 'count_hit'){
      fetch('https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=count_hit&sort_dir=desc')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setAllGuide(data);
        })
      }
    else if(select.value == 'published'){
      fetch('https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=published&sort_dir=desc')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setAllGuide(data);
        })
      }
      else if(select.value == 'relevance'){
        fetch('https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=relevance')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setAllGuide(data);
          })
        }
  }

  useEffect(() => {
    handleSelect();
  },[select.value]);

  const HandleChangeS = (event) => {
    setSelect({value: event.target.value});
  }

    return (
      <>
        <div className='navbar'>
          <h1 className='libguides'>LibGuides</h1>
          <Link to="/profile" clasName='navlink'>Profile</Link>
          <Link to="/" onClick={logout} clasName='navlink'>Logout</Link>
        </div>
        <div>
          <h2>Welcome to the Home page, {name}</h2>
          {/* <button onClick={showAllGuide}>Show All Guides</button> */}
          <label>
          Sort by
            <select onChange={(event) => HandleChangeS(event)} value={select.value}>
              <option value="name" default>Name</option>
              <option value="count_hit">Count hit</option>
              <option value="published">Published date</option>
              <option value="relevance">Relevance</option>
            </select>
          </label>
          {console.log(allGuide)}
          {allGuide && <GuideList allGuide={allGuide} title="All Guides" />}
        </div>
      </>
    );
}

export default Home;
