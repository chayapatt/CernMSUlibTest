import {useState, useEffect} from 'react';
import AddedList from './AddedList'

//Guidelist.js prints the list of guides to the home page
const GuideList = ({allGuide, title}) => {

  const [addedName, setAddedName] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    console.log(addedName);
  }, [addedName]);

  const handleClick = (event) => {
    // const btnid = event.target.id;
    console.log('clicked add: ' + event.target.id);
    setAddedName(addedName => [...addedName, event.target.id]);
    //setDisable({[event.target.id]: true});
  }

  return (
    <div className="guideList">
      <AddedList props={addedName} />
      <h2>{title}</h2>
      {allGuide.map((guide) => (
        <div className="combine">
          <div className="guidePrev" key={guide.id}>
            <h4>Guide name: {guide.name}</h4>
            <p>Count hit: {guide.count_hit}</p>
            <p>Published date: {guide.published}</p>
          </div>
            <button id={guide.name} disabled={disable} onClick={handleClick} className="addToProfilebtn">Add to profile</button>
        </div>
      ))}
    </div>
  )
}
export default GuideList
