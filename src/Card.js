import React from 'react'
import "./Card.css"
function Card({match}) {
  return (
    <div className='card'>
    <h2>{match.tournament[0].name}</h2>
    <p>{match.round}</p>
    <div className='whole'>
    <p>v/s</p>
    <div className='player'>
      <div className={(match.winner===match.team1[0].name)?'winner':'loser'}>

      {(match.winner===match.team1[0].name)&&<img src='https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08f830ae-ce65-42f5-b243-b7a3f8a15b5f%2Fcrown.png?table=block&id=11d166ac-814d-4227-853f-40ada51bf632&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2'/>}
    <img className='flag-india' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'/>

      </div>

      <h4>{match.team1[0].name}</h4>

    </div>
    <div className='score'>
        <h4>{match.a1}-{match.b1},{match.a2}-{match.b2}{(match.a3!=0&&match.b3!=0)&&`,${match.a3}-${match.b3}`}</h4>
    </div>

    <div className='player'>
    <div className={(match.winner===match.team2[0].name)?'winner':'loser'}>
      {(match.winner===match.team2[0].name)&&<img src='https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08f830ae-ce65-42f5-b243-b7a3f8a15b5f%2Fcrown.png?table=block&id=11d166ac-814d-4227-853f-40ada51bf632&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2'/>}
    <img className='flag-india' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'/>
      </div>
      
    <h4>{match.team2[0].name}</h4>

    </div>

    </div>
    <img className='match-logo' src='https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda00ca61-beb4-4735-8ff8-f6cff8597fc3%2Flogo_white.png?table=block&id=8e435d38-571b-4023-a052-a8516ebb7be7&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2'/>

        </div>
  )
}

export default Card