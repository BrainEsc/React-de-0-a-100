import "./style.css"
import{useState}from "react"
export function  TwitterFollowCard({userName = "Unknow", children}){
    const [isFollowing,setIsFollowing]= useState(false)
    const text = isFollowing ? "Siguiendo" : "Seguir"
    {/*cambiar el estado con css */}
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
         <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img  
                className="tw-followCard-avatar"
                src="https://i.pravatar.cc/150?img=12"
                />
                <div className="tw-followCard-info">
                    <strong>
                       <strong>{children}</strong> 
                    </strong>
                    <span className="tw-followCard-infoUserName">
                     @{userName}
                    </span>
                </div>
            </header>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </article>
    )
}