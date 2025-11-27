import React, { createContext, useContext } from "react";


const Context = createContext()

export function Parent(){
    const data = 'This is parent data'
    return (<Context value={data}>
        <h1>Parent</h1>
        <Child />
        <Child1 />
    </Context>
    )
}

function Child(){
    const data = 'This is child data' 
    return(<>
        <Context value={data}>
        <h1>Child</h1>
        <SuperChild />
        </Context>
    </>
    )
}
function Child1(){
    const data = 'This is child1 data' 
    return(<>
        <Context value={data}>
        <h1>Child1</h1>
        <SuperChild />
        </Context>
    </>
    )
}
function SuperChild(){
    const val= useContext(Context)
    return(<>
        <h1>SuperChild</h1>
        <p>{val}</p>
    </>
    )
}