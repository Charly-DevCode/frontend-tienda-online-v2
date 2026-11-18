import { Link } from "react-router";
import { CustomLogo } from "@/shared/components/CustomLogo";
import { Button } from "@/shared/components/ui/Button";

import '@/features/auth/styles/pages/login-page.css';

export const LoginPage = () => {
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <CustomLogo subtitle="Acceso" />
        <p className="auth-card__subtitle">Ingresa tus datos para acceder a tu cuenta.</p>
      </div>

      <form className="auth-card__form" onSubmit={(event) => { event.preventDefault(); console.log(event); }}>
        <div className="auth-card__field">
          <label htmlFor="email" className="auth-card__label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            required
            className="auth-card__input"
          />
        </div>

        <div className="auth-card__field">
          <label htmlFor="password" className="auth-card__label">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            className="auth-card__input"
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          className="auth-card__submit-btn"
        >
          Iniciar Sesión
        </Button>
      </form>

      <div className="auth-card__footer">
        <p className="auth-card__footer-text">
          ¿No tienes una cuenta? <Link to="/auth/register" className="auth-card__link">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};