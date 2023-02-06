import React from 'react'
import './profilecontent.scss'
import Card from '../../minipages/miniComponents/friendcard/friendscards'


const Profilecontent = () => {
  return (
    <div className='profilecontent'>
        <h3>people you may know</h3>
        <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Profilecontent