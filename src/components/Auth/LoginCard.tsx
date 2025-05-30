import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import LoginHeader from './LoginHeader';
import LoginFields from './LoginFields';
import LoginActions from './LoginActions';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <Card className={cn(
      "w-[350px] max-w-full bg-card text-card-foreground rounded-lg shadow-lg",
      className
    )}>
      <CardContent className="p-6 flex flex-col gap-6">
        <LoginHeader />
        <LoginFields />
        <LoginActions />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
