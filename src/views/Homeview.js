import axios from 'axios'
import { useEffect,useState } from 'react';
import '../styles/sytle.scss'

const Homeview = () => {
  const [meetings, setMeetings] = useState([])
  const apiUrl = 'http://localhost:5000/api'

useEffect(() => {
getMeetings();
}, [])

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`);
    setMeetings(response.data)
  }
  return (
   meetings.map(meeting => <h1>{meeting.concept}</h1>)
  )
}

export default Homeview
