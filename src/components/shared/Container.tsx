interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <section
      className={`w-full max-w-[1280px] px-4 sm:px-6 md:px-10 mx-auto py-6 sm:py-10 md:py-25 pt-16 md:pt-6 ${className || ""}`}
      {...props}
    >
      {children}
    </section>
  );
}
