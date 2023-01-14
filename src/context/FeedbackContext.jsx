import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>{

const [feedback,setFeedback]=useState([
    { id:1,
        rating:10,
        text:'This is Item 1',
       },
       { id:2,
        rating:7,
        text:'This is Item 2',
       },
       { id:3,
        rating:20,
        text:'This is Item 3',
       },
])


const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure ?')){
        setFeedback(feedback.filter((item)=>item.id !== id))
    }
}

const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
})

const editFeedback=(item)=>{
    setFeedbackEdit({
        item,
        edit:true
    })
}

const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
setFeedback([newFeedback, ...feedback])
}

const updateFeedback=(id,updItem)=>{
   setFeedback(
    feedback.map((item)=>(item.id == id ? {...item, ...updItem}:item))
   )
}
return (
    <FeedbackContext.Provider 
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
{children}
    </FeedbackContext.Provider>
)
}

export default FeedbackContext