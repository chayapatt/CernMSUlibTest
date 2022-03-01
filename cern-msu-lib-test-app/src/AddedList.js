import GuideList from './GuideList'
import {useState} from 'react'

//I added this component to try to add guide to profile.
function AddedList(props) {
  const [added, setAdded] = useState([])
  return (
    <div>
      <p>{props.data}</p>
    </div>
  )
}

export default AddedList
