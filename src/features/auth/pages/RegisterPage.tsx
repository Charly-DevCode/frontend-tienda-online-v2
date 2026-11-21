import { Link } from "react-router";

import { CustomLogo } from "@/shared/components/CustomLogo";
import { Button } from "@/shared/components/ui/Button";

import '@/features/auth/styles/pages/register-page.css';

export const RegisterPage = () => {
  return (
    <div className="register-card">
      <div className="register-card__header">
        <CustomLogo subtitle="Registro" />
        <p className="register-card__subtitle">Regístrate para comenzar a usar la plataforma.</p>
      </div>

      <form className="register-card__form" onSubmit={(e) => e.preventDefault()}>
        <div className="register-card__field">
          <label htmlFor="name" className="register-card__label">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
            className="register-card__input"
          />
        </div>

        <div className="register-card__field">
          <label htmlFor="email" className="register-card__label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            required
            className="register-card__input"
          />
        </div>

        <div className="register-card__field">
          <label htmlFor="password" className="register-card__label">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            className="register-card__input"
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          className="register-card__submit-btn"
        >
          Registrarse
        </Button>
      </form>

      <div className="register-card__footer">
        <p className="register-card__footer-text">
          ¿Ya tienes una cuenta? <Link to="/auth/login" className="register-card__link">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};