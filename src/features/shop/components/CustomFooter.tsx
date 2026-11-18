import { Link } from 'react-router';
import { CustomLogo } from '@/shared/components/CustomLogo';
import { SocialLinks } from '@/shared/components/SocialLinks';

import '@/features/shop/styles/components/custom-footer.css';

export const CustomFooter = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <CustomLogo variant="light" />
          <p className="footer__description">
            Lo que buscas lo encuentras aquí. Tecnología, hogar, camping y mucho más.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Enlaces útiles</h4>
          <ul className="footer__list">
            <li><Link to="/" className="footer__link">Inicio</Link></li>
            <li><Link to="/sale" className="footer__link">Ofertas</Link></li>
            <li><Link to="/articles" className="footer__link">Articulos</Link></li>
            <li><Link to="/brands" className="footer__link">Marcas</Link></li>
            <li><Link to="/contact" className="footer__link">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contacto</h4>
          <ul className="footer__list footer__list--contact">
            <li>Email: info@megastore.com</li>
            <li>Teléfono: +54 3775 123 456</li>
            <li>Monte Caseros (Prov. Corrientes), Argentina</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Seguinos en</h4>
          <SocialLinks />
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {anioActual} MegaStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};