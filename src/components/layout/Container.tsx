type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className = '', children }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-5xl px-0 md:px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
