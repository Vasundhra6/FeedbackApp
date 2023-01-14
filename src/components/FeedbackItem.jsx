import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {Fatimes, FaEdit} from 'react-icons/fa'
function FeedbackItem({item}) {
   const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>editFeedback(item)} 
      className='edit'>
        <FaEdit color='purple'/>
      </button>
      <button onClick={()=>deleteFeedback(item.id)} className='close'>
      <FaTimes color='purple' />
      </button>
      <div className='text-dispaly'>{item.text}</div>
      
      </Card>
  )
}

export default FeedbackItem

