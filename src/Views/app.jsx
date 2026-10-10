
import { createRoot } from "react-dom/client"
import React from "react"
import{TwitterFollowCard,Botones} from "../components"

export function App(){
    {/*--> se pueden pasar funciones como props
        ejemplo
    const format = (userName)=>`@${userName}`
    <div className='App'>
    <TwitterFollowCard
    formatUserName={format}
     userName= "brayy" 
     name= "brian"/>
    */}
    return(
    <>{/* ---> es igual a <React.Fractment>  */}
  <div className='App'>
    <TwitterFollowCard  userName= "brayy">
        brian
    </TwitterFollowCard>
     <TwitterFollowCard>
        Daniel
    </TwitterFollowCard>
     <TwitterFollowCard userName= "criss">
        cris
    </TwitterFollowCard>
    <Botones/>
    <Botones/>
     

    
  </div>
  </>
    )
}