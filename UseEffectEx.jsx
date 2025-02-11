import React,{useEffect, useState} from 'react'

const UseEffectEx = () => {
    const[users , setUsers]=useState([]);
    console.log(users);
    // useEffect (()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     document.title ="MRU";
    // },[count])
    useEffect(()=>{
        fetch("")
        .then(response=>response.json().then(data=>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='parent'>UseEffectEx
    {
        users.map((user , index)=>{
            return(
                <React.Fragment key={index}>
                <h1>{user.name}</h1>
                <h3>{user.email}</h3>
                </React.Fragment>
            )
        })
    }
       {/*<h1>{count}</h1> */}
    </div>
  )
}

export default UseEffectEx

// let obj ={
//     a:1,
//     b:2,
//     c:3
// }

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// let{a , b , c}=obj;
// console.log(a);
// console.log(b);
// console.log(c);