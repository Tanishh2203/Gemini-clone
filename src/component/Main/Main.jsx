import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src ={assets.user_icon} alt=""/>
      </div>
      <div className="main-container">
        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello,User</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Want to know something?</p>
              <p>Why wait? </p>
                <p>Just Ask Gemini!</p>
            
            <img src={assets.compass_icon} alt=""/>
          </div>
          <div className="card">
            <p>Not Just Hints</p>
            <p>
              Get All you need
            </p>
            <img src={assets.bulb_icon} alt=""/>
          </div>
          <div className="card">
            <p>All you need is to share your thoughts below</p>
            <img src={assets.message_icon} alt=""/>
          </div>
          <div className="card">
            <p>And Finally!
              <p>Hello, how are you?</p></p>
            <img src={assets.code_icon} alt=""/>
          </div>
        </div>
        </> 
        :
        <div className="result">
           <div className="result-title">
            <img src={assets.user_icon} alt=''/>
            <p>{recentPrompt}</p>
           </div>
           <div className="result-data">
            <img src={assets.gemini_icon} alt=''/>
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML = {{__html:resultData}}></p>
          }
           </div>
        </div>
        }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Ask Gemini'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            This Gemini-Clone is Made By Tanish 
            <p>Search all you need</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main