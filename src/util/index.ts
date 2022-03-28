import { useEffect, useState } from "react"

//不直接改变本身对象
export const cleanObject=(object:Object)=>{
        let tempobj=Object.assign({},object)
        Object.keys(tempobj).forEach(key=>{
            //@ts-ignore
            const value=tempobj[key]
            if(isFalsy(value)){
                  //@ts-ignore
                delete tempobj[key]
            }
        })

        return tempobj
}

//判断是否为0
export const isFalsy=(value:unknown)=>value===0?false:!value

//custom hook
export const useDebounce=<v>(value:v,delay?:number):v=>{
    const [debebounceValue,setDebounceValue]=useState(value)

    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return ()=>clearTimeout(timeout)
    },[value,delay])
    
    return debebounceValue
}

export const useArray=<T>(array:T[])=>{

    const [value,setvalue]=useState(array)

    return {
        value,
        setvalue,
        add:(item:T)=>setvalue([...value,item]),
        clear:()=>setvalue([]),
        removeIndex:(index:number)=>{
            const tempArray=[...value]
            tempArray.splice(index,1)
            setvalue(tempArray)
        }
    }
}