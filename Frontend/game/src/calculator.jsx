import React, { useState } from "react";
export function Calculate(){
    const [res,setResult] = useState('')
    const [error,setError] = useState('')

    const elements =['1','2','3','4','5','6','7','8','9','0','+','-','/','*','(',')','<-','=']

    const handleClick=(ele)=>{
        if (ele==='<-'){
            setResult((prev)=>prev.slice(0,-1))
        }
        else if(ele==='='){
            try{
                const result = eval(res)
                setResult(result)
                setError('')

            }
            catch(e){
                setError('Enter valid expression')
            }
        }
        else{
            setResult((prev)=>prev+ele)
        }
    }

    return (
        <div>
            {error && (
                <p>{error}</p>
            )}
            <p>{res}</p>
            {elements.map((ele)=>(
                <button key={ele} onClick={()=>handleClick(ele)} >{ele}</button>
            )
            )}

        </div>
    )
} 