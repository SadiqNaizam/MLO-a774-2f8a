import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS class names to apply to the layout container.
   */
  className?: string;
}

/**
 * MainAppLayout provides the outermost structure for the application pages.
 * It typically centers content on the screen with a standard background.
 * According to the project's Layout Requirements, this component will:
 * - Use Flexbox to center its children both vertically and horizontally.
 * - Occupy the full screen height.
 * - Apply the standard application background color.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={cn(
        'flex items-center justify-center h-screen bg-background text-foreground',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
