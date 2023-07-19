import aboutImage from '/src/assets/about-image.jpg'
function About() {
  return (
    <section className="about" id="about">
        <h2 className='heading'>About <span>Me</span></h2>
        <div className="about-img">
            <img src={aboutImage} alt="foto" />
            <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h3>Frontend Developer !</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit magnam praesentium suscipit voluptas obcaecati, officia eaque tempore asperiores nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente accusamus asperiores eveniet doloribus sint placeat, optio quidem temporibus officia. Fugit veniam consequatur facilis nemo. Illum ipsa nemo quisquam ut sint inventore harum tempore cum. Reprehenderit dolores deserunt voluptatem?</p>
          <div className="btn-box btns">
            <a href="https://t.me/Tilav_uz" target='_blank' className="btn">Read More</a>
          </div>
        </div>
    </section>
  )
}

export default About