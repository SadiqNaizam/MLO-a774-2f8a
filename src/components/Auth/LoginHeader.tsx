import React from 'react';
import { cn } from '@/lib/utils';

interface LoginHeaderProps {
  className?: string;
  title?: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ className, title = "Log in" }) => {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <h2 className="text-3xl font-bold text-card-foreground">
        {title}
      </h2>
    </div>
  );
};

export default LoginHeader;
