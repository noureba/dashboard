import React from 'react'
import '../../styles/css/Analytics.css'


function Card({title,iconeTitle,iconeFooter, footer, body, color, per}) {
  return (
    <div>
        <div className='card'>
            <div>
                <p className='text-primary'>{title}</p>
                <i className='fs-2'>{iconeTitle}</i>
            </div>
            <p className=' fs-3 '>{body}</p>
            <div>
                <p className={`${color}`}><i>{iconeFooter}</i>{per}</p>
                <p>{footer}</p>
            </div>
        </div>
    </div>
  )
}

export default Card