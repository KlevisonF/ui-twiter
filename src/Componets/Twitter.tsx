import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Twitter.css'
import {Link} from 'react-router-dom'
interface TweetProps{
  content: string
}

const Twitter = (props:TweetProps) => {
  return (
    <Link to={'/status'}className='tweet'>
     <img src='http://github.com/KlevisonF.png' alt='KlevisonF' ></img>
     <div className='tweet-content'>
      <div className='tweet-content-header'>
    <strong>Klevison Ferreira</strong>
    <span>@Kleviferreira0</span>
      </div>
     <p>{props.content}</p>
      <div className='tweet-content-footer'>
        <button type='button'>
          <ChatCircle/>
          20
        </button>

        <button type='button'>
          <ArrowClockwise/>
          20
        </button>

        <button type='button'>
          <Heart/>
          20
        </button>
      </div>
     </div>
    </Link>
  )
}

export default Twitter
