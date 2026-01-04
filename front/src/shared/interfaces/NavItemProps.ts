export interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  badge?: string | number;
  onClick?: () => void;  
}