import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Auth/LoginCard';

/**
 * LoginPage serves as the main entry point for user authentication.
 * It employs the MainAppLayout to ensure the LoginCard is displayed
 * centrally on the page, adhering to the specified layout requirements.
 * The LoginCard itself encapsulates all elements of the login form,
 * including header, input fields, and action buttons.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
