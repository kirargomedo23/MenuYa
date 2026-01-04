import { useState } from 'react';
import { MdEmail, MdLock, MdArrowForward } from 'react-icons/md';

import { Button, InputField, Panel, Logo, FormContainer, LoginFooter } from '@/shared/components';
import type { LoginPageProps } from '@/shared/interfaces/LoginPageProps';


const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleSignUp = () => {
    console.log('Navigating to sign up...');
  };

  const handleHelp = () => {
    console.log('Opening help...');
  };

  const handleLoginClick = () => { 
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans ">
      {/* --- PANEL IZQUIERDO   --- */}
      <Panel side="left">
        <Logo />

        <div className="max-w-lg my-12 md:my-0  ">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Gestiona tu <span className="text-primary-light">Menú Digital</span> de forma inteligente.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Accede a tu panel de control para actualizar platos, organizar categorías y ver estadísticas.
          </p>
        </div>


      </Panel>

      {/* --- PANEL DERECHO   --- */}
      <Panel side="right">
        <FormContainer
          title="Bienvenido de nuevo"
          subtitle="Ingresa tus credenciales para acceder al panel."
          onSubmit={handleSubmit}
        >
          {/* Campo: Correo electrónico */}
          <InputField
            label="Correo electrónico"
            type="email"
            name="email"
            id="email"
            placeholder="admin@restaurante.com"
            icon={<MdEmail size={22} />}
            value={formData.email}
            onChange={handleInputChange}
          />

          {/* Campo: Contraseña */}
          <InputField
            label="Contraseña"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            icon={<MdLock size={22} />}
            helpText="¿Olvidaste la contraseña?"
            showPasswordToggle
            showPassword={showPassword}
            onPasswordToggle={togglePasswordVisibility}
            value={formData.password}
            onChange={handleInputChange}
          />

          {/* Botón de Iniciar Sesión */}
          <Button
            type="submit"
            fullWidth
            size="lg"
            icon={<MdArrowForward size={24} />}
            onClick={handleLoginClick}
          >
            Iniciar Sesión
          </Button>
        </FormContainer>
 
        <div className="relative">
          <LoginFooter onSignUp={handleSignUp} onHelp={handleHelp} />
        </div>
      </Panel>
    </div>
  );
};

export default LoginPage;