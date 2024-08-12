import React from 'react'
import '../styles/Banner.css'
import { FaPlay } from "react-icons/fa"
import { IoMdInformationCircleOutline } from "react-icons/io"
import NetflixCarousel from './NetflixCarousel'

function Banner() {
  return (
    <>
      <div className='banner'>
        <div className='banner-movie'>
            <img  
            src="https://media.gq.com/photos/6628081b6165c331ab79776c/16:9/w_2560%2Cc_limit/SUB_6400_comp_FRM_v0220_1387_R_8d5163120a.jpg"
            />
        </div>
        <div className='name-movie'>
            <img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4a79dd1-7f9a-4cb9-84ab-85dcda9b353e/dfztoxf-8c75946c-f8cd-4f2f-be14-c7a402a398bd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YTc5ZGQxLTdmOWEtNGNiOS04NGFiLTg1ZGNkYTliMzUzZVwvZGZ6dG94Zi04Yzc1OTQ2Yy1mOGNkLTRmMmYtYmUxNC1jN2E0MDJhMzk4YmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.THsC0M4vJ7PW68VjobFbWtpKpZEijID1S05zGg4VO84"
            width={200}
            />
            <div className='sub-details'>
            หกปีหลังเหตุการณ์ใน เดดพูล 2 (2018) เวด วิลสัน ใช้ชีวิตอย่างเงียบสงบ โดยทิ้งช่วงเวลาที่เขาเป็นทหารรับจ้าง เดดพูล ไว้เบื้องหลัง จนกระทั่ง องค์การกำกับสาขาเวลา (TVA) องค์กรราชการที่มีตัวตนอยู่นอกเหนือเวลาและสถานที่และติดตามเส้นเวลา
            </div>
            <div className='butt-area'>
            <div className='play-butt'>
                <FaPlay />
                เล่น
            </div>
            <div className='more-info'>
            <IoMdInformationCircleOutline />
            ข้อมูลเพิ่มเติม
            </div>
            </div>
        </div>
      </div>
       <NetflixCarousel name="ภาพยนตร์ตลกแนวสายลับ" />
       <NetflixCarousel name="เราคิดว่าน่าจะตรงใจคุณ"/>
    </>
  )
}

export default Banner