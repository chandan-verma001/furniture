import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='banner_container_wraper'>
    <div className='container'>
      <div className='banner_box_wraper' >
        <div className='left_banner'></div>
        <div className='right_banner'>
          <h3 className='welcome'>WELCOME TO OUR</h3>
          <h1>FUNITURE GALLERY</h1>
          <hr/>
          <h3 className='browse'>BROWSE OUR SELECTIONS</h3>
          <p>Featuring sleek designs and innovative materials that seamlessly blend form and function.</p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Banner