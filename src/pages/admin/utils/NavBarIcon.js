export const NavbarIcon = ({
  styles,
  name,
  imgUrl,
  logo2,
  isActive,
  disabled,
  icon,
  handleClick,
}) => {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#2c2f32]"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {logo2 && <img src={logo2} className="w-1/3 h-1/3" />}
      {icon && (
        <i
          className={`${icon} text-[25px] flex justify-center items-center flex-col`}
          style={{ width: "50px", height: "45px" }}
        ></i>
      )}
    </div>
  );
};
