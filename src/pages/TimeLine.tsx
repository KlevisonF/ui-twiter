import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../Componets/Header'
import Separator from '../Componets/Separator'
import Twitter from '../Componets/Twitter'
import './Timeline.css'


  



  
let newTweet = ''

const TimeLine = () => {
  const[newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
  'Teste',
  'Deu certp tweetar!'
  ])
 
  const createNewTweet = (event: FormEvent) =>{
  event.preventDefault()
  setTweets([newTweet, ...tweets])
  setNewTweet('')
  }
  const handleHotKeySubmit = (event:KeyboardEvent)=>{
    if(event.key  === 'Enter'  && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
      }
  
  return (
    
      <main className='timeline'>
    <Header title='Home'/>
      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src="http://github.com/KlevisonF.png" alt="klevisonF" ></img>
          <textarea 
          id='tweet' 
          placeholder='what`s happening'
          value={newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(event)=>{
            setNewTweet(event.target.value)
            
          }}
          />
        </label>
        <button type='submit'>Tweet</button>
      </form>
      <Separator/>
      {tweets.map(tweet =>{
        return <Twitter key={tweet} content={tweet}  />
      })}
   </main>
   
  )
}

export default TimeLine
