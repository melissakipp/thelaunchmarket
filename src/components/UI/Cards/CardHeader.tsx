interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
  return (
    <div
      className={`border-b border-gray-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}