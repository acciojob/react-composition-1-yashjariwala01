import React, { useState } from 'react'

const Tabs = ({arr}) => {
    const [tab,setTab] =useState(arr[0].content);
  return (
    <div>
      <ul>
        <li onClick={()=>setTab(arr[0].content)}>{arr[0].title}</li>
        <li onClick={()=>setTab(arr[1].content)}>{arr[1].title}</li>
        <li onClick={()=>setTab(arr[2].content)}>{arr[2].title}</li>
      </ul>
      <p>{tab}</p>
    </div>
  )
}

export default Tabs

