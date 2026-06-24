function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export default Container;