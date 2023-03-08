import '../css/footer.css'
import { Link } from 'react-router-dom'
import facebook from '../images/facebook.png'
import wsp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import twitter from '../images/gorjeo.png'
import logo from '../images/peliculas.png'       

function Footer() {
    return (
            <footer className='d-flex flex-column align-items-center justify-content-center'>
                <Link to='/'><img src={logo} alt="logo" width={80}/></Link>
                <div className='iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center'>  
                    <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><img  className="footer-icono" src={facebook} alt="logo-wsp"/></a>
                    <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer"><img  className="footer-icono" src={wsp} alt="logo-wsp"/></a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img  className="footer-icono" src={instagram} alt="logo-instagram"/></a>
                    <a href="https://twitter.com/home/" target='_blank' rel="noreferrer"><img  className="footer-icono" src={twitter} alt="logo-twitter"/></a>
                </div>

                <p className='footer-texto text-center'>Copyright Matias Macagno &#169;</p>
            </footer>
        
    )
}

export default Footer;