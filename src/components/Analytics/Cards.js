import React from 'react'
import {FiUsers} from "react-icons/fi"
import {AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineHourglass} from 'react-icons/ai'
import '../../styles/css/Analytics.css'
import Card from './Card'

function Cards() {
  return (
    <div className='cards'>
        <Card title="ACTIVE USERS" iconeTitle={<FiUsers/>} body="235" iconeFooter={<AiOutlineArrowUp/>}  footer="Since last month" per="3.6%" color="text-success"/>
        <Card title="VIEWS PER MINUTE" iconeTitle={<AiOutlineHourglass/>} body="563" iconeFooter={<AiOutlineArrowDown/>}  footer="Since last minute" per="1.2%" color="text-danger"/>
        <Card title="ACTIVE USERS" iconeTitle={<AiOutlineHourglass/>} body="232" iconeFooter={<AiOutlineArrowDown/>}  footer="Since last month" per="0.5%" color="text-success"/>
    </div>
  )
}

export default Cards