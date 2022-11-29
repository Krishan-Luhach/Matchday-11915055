import React from 'react'
import "./Second.css"
import "../node_modules/video-react/dist/video-react.css"; // import css
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
function Second() {
  const navigate=useNavigate();
  return (
    <div className='second'>
        <div className='header_second'>
        <i onClick={()=>navigate("/")} class="fa-solid fa-backward"></i>
            <div className='tag'><h3>Video Analytics</h3></div>
        </div>
        <div className='video'>
        <ReactPlayer
        controls='true'
        url="https://www.youtube.com/watch?v=YanbwuQvnrU"
        
        />
        <div>
        <button accesskey='space'>Play</button>
        <button>Pause</button>
        <button>Forward 5sec</button>
        <button>Backward 5sec</button>
        </div>
        </div>
    </div>
  )
}

export default Second
