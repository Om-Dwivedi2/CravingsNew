import React from 'react'

const MainDashboard = (props) => {
  return (
    <>
      <div className='bg-(--color-background) w-full px-5' >

        <h1 className='text-3xl font-semibold pt-10'>Hi, {props.userData.fullName}! </h1>
        <p className='text-sm text-(--color-secondary) pt-2'>Welcome to your dashboard!</p>



      </div>
    </>
  )
}

export default MainDashboard