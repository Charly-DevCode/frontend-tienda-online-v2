import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuthStore } from "@/features/auth/store/auth.store";

import { CustomLogo } from "@/shared/components/CustomLogo";
import { Button } from "@/shared/components/ui/Button";
import {
  ToastNotification
} from '@/shared/components/ToastNotification';

import '@/features/auth/styles/pages/login-page.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [ showToast, setShowToast ] = useState(false);


  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(false);

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const isValid = await login(email, password);

    if (isValid) {
      navigate('/');
      return;
    }    
    setShowToast(true);
  }

  return (
    <>
      <ToastNotification
        isOpen={ showToast }
        type="error"
        message="Email y/o contraseña incorrecta"
      />

      <div className="auth-card">
        <div className="auth-card__header">
          <CustomLogo subtitle="Acceso" />
          <p className="auth-card__subtitle">Ingresa tus datos para acceder a tu cuenta.</p>
        </div>

        <form className="auth-card__form" onSubmit={ handleSubmit }>
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
    </>
  );
};