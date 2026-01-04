export interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  icon: React.ComponentType<{ size: number }>;
  isNegative?: boolean;
}