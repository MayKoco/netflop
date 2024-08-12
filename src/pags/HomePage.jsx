import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import Banner from '../components/Banner'
import { RiNotification3Line } from "react-icons/ri"
import { IoSearch } from "react-icons/io5"


function home() {
  return (
    <div className='main-page'>
      <div className='navbar'>
        <div className='bg-navbar'>
          <div className='menu-left'>
            <div className='logo-netflix'>
              <img src={logo} width={100} />
            </div>
            <div className='nav-menu'>
              <a>หน้าหลัก</a>
              <a>รายการทีวี</a>
              <a>ภาพยนตร์</a>
              <a>มาใหม่และกำลังฮิต</a>
              <a>รายการของฉัน</a>
              <a>เลือกดูตามภาษา</a>
            </div>
          </div>
          <div className='menu-user'>
            <div className='search-icon'>
              <IoSearch />
            </div>
            <span>มุมเด็ก</span>
            <span>
              <RiNotification3Line />
            </span>
            <div className='profile'>
              <img  src='https://wallpapers.com/images/hd/cartoon-cat-pictures-35blxiav7kg0itm8.jpg'/>
            </div>
          </div>
        </div>
      </div>
      <div className='banner-fill'>
        <Banner />
      </div>
    </div>
  )
}

export default home