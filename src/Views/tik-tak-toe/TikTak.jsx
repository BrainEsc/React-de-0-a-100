import React from 'react';
import"./Tiktak.css"
const  Turno = {
    "x": "x",
    "o": "o"
}
const board = Array(9).fill(null);
export function TikTak(){
    const Cell = ({children,updateBoard,index})=>{
        return (
            <div className='cell'>
                {children}
                          
            </div>
        )
    }

    return (
        <main className="board">
         <h1>Tiktak</h1>
         <section className='game'>
            {
                board.map((_,index)=>{
                    return(
                    <Cell 
                    key={index}
                    index= {index}
                    >
                        {index}

                    </Cell>
                    )
                })
            }

         </section>

    </main>
    );
}