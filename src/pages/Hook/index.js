// 使用hooks
import React , {useState} from "react";
import { Button } from 'antd';
import './index.less'

export default function(){
    const [count,setCount]=useState(0)

    return(
        <div className="hookContainer">
            <Button type="primary" onClick={()=>{setCount(count+1)}} className="plus">加</Button>
            {count}
            <Button onClick={()=>{setCount(count-1)}} className="reduce">减</Button>
            <div className="suggestive">可点击进行计算</div>
        </div>
    )
}