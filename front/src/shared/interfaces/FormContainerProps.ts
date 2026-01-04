export interface FormContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}