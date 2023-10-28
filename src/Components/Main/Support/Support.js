import React, {useState} from 'react'
import './Support.css'
import SupportItem from './SupportItem'
import supportContent from './SupportData'

export default function Support() {

    const [supportItems, setSupportItems] = useState(supportContent)
  
    return (
    <div className='container'>
        <div className="support">
            {supportItems.map(item => (
                <SupportItem key={item.id} {...item} />  
            ))}

        </div>
    </div>
  )
}
