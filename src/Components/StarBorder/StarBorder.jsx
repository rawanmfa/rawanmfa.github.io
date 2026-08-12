const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#f40948',
  speed = '3s',
  thickness = 4,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 -top-2.5 left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="relative z-1 bg-black hover:bg-[#f2ceda] hover:text-black transition-colors text-white cursor-pointer border border-gray-800 text-center text-sm py-1.5 px-2 rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;