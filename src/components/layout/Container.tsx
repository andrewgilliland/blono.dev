type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className = "", children }: ContainerProps) => {
  return <div className={`max-w-5xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
