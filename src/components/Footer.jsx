import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-text">
            <p>This Portfolio belongs to Tilovov Shavkiddin</p>
        </div>
        <div className="footer-iconTop">
            <Link to='home'><i className="bi bi-arrow-up-short"></i></Link>
        </div>
    </footer>
  )
}

export default Footer