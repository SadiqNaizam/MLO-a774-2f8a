import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFieldsProps {
  className?: string;
}

const LoginFields: React.FC<LoginFieldsProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <div className={cn("flex w-full flex-col space-y-4", className)}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username" className="text-sm font-medium text-card-foreground">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-card text-card-foreground border-input placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring rounded-md"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-card text-card-foreground border-input placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring rounded-md"
        />
      </div>
    </div>
  );
};

export default LoginFields;
