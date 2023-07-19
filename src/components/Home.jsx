import { Link } from 'react-scroll'
import image from '/src/assets/image.jpg'

function Home() {
  return (
    <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, I'm <span>Tilovov Shavqiddin</span></h1>
            <div className="text-animate">
                <h3>Frontend Developer</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati voluptates saepe provident eos voluptatum quas perspiciatis amet officia ut neque, quidem earum hic dolor. Ratione, quod?</p>
            <div className="btn-box">
                <a href="#" className="btn">Hire Me</a>
                <Link to="contact" className="btn">Let's Talk</Link>
            </div>
        </div>
        <div className="home-sci">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-telegram"></i></a>
            <a href="#"><i className="bi bi-github"></i></a>
        </div>
        <div className="home-img"><img src={image} alt="foto" /></div>
    </section>
  )
}

export default Home