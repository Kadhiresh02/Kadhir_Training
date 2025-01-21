import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [age,setAge]=useState(18);
    const [sal,setSal]=useState(10000);
    //case 1: no dependency values pass
    // useEffect(()=>{
    //     setAge(age+1);
    // })
    
    //case 2: when we pass dependencies value as black array
    // useEffect(() => {
    //   setAge(age+1);
    // }, [])

    //case:3 when we have to execute useEffect hook as we want
    useEffect(() => {
        setAge(age);
    }, [sal])
    return (
        <div>
            <h2>This is use UseEffectHookComp!</h2>
        <p>Age is :{age}</p>
        <p>Salary is :{sal}</p>
        <button type='button' onClick={()=>setSal(sal+5000)} className='btn btn-primary'>Update Sal</button>
        </div>
    )
}

export default UseEffectHookComp
