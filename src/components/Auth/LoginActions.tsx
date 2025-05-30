import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LoginActionsProps {
  className?: string;
  onLogin?: () => void;
  onSignUp?: () => void;
}

const LoginActions: React.FC<LoginActionsProps> = ({ className, onLogin, onSignUp }) => {
  const handleLogin = React.useCallback(() => {
    if (onLogin) {
      onLogin();
    } else {
      console.log('Login button clicked: Perform login');
    }
  }, [onLogin]);

  const handleSignUp = React.useCallback(() => {
    if (onSignUp) {
      onSignUp();
    } else {
      console.log('Sign up link clicked: Navigate to sign up');
    }
  }, [onSignUp]);

  return (
    <div className={cn("flex w-full flex-col items-center space-y-3", className)}>
      <Button
        variant="default"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring rounded-md h-10"
        onClick={handleLogin}
      >
        Log in
      </Button>
      <Button
        variant="link"
        className="text-sm font-medium text-muted-foreground hover:text-accent hover:no-underline focus-visible:ring-1 focus-visible:ring-ring rounded-md"
        onClick={handleSignUp}
      >
        or, sign up
      </Button>
    </div>
  );
};

export default LoginActions;
