import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../Componets/Header'
import Separator from '../Componets/Separator'
import Twitter from '../Componets/Twitter'
import './Status.css'


const Status = () => {

  const[newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([
  
  'Concordo...',
  'Olha, fazs sentido!',
  'Parabéns pelo progresso.'
  ])
 
  const createNewAnswer = (event: FormEvent) =>{
  event.preventDefault()
  setAnswer([newAnswer, ...answers])
  setNewAnswer('')
  }
  const handleHotKeySubmit = (event:KeyboardEvent)=>{
if(event.key  === 'Enter'  && (event.ctrlKey || event.metaKey)){
  setAnswer([newAnswer, ...answers])
  setNewAnswer('')
}
  }

  return (
     <main className='status'>
    <Header title='Tweet'/>

    <Twitter content="Loren loren inpsum adic odoas Loren loren inpsum adic odoasLoren loren inpsum adic odoasLoren loren inpsum adic odoasLoren loren inpsum adic odoas"/>
    <Separator/>
      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src="http://github.com/KlevisonF.png" alt="klevisonF" ></img>
          <textarea 
          id='tweet' 
          placeholder='Tweet your answer'
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event)=>{
            setNewAnswer(event.target.value)
          }}
          />
        </label>
        <button type='submit'><PaperPlaneRight/><span>Answer</span></button>
      </form>
      
    {answers.map(answer =>{
        return <Twitter key={answer} content={answer}  />
      })} 
   </main>
  )
}

export default Status
