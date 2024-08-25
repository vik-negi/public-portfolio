import { Tooltip, Typography } from "@material-tailwind/react";
import create from "../utils/Theme";

export function CommonToolTip({ children, content, maxWidth }) {
  const theme = create();
  return (
    <Tooltip
      placement="bottom"
      className={`border z-[10]  ${
        theme.theme !== "light" ? "bg-black" : "bg-white"
      } border-blue-gray-50 px-4 py-3 ${maxWidth && "w-[400px]"}}`}
      content={content || <Typography>Tooltip</Typography>}
    >
      {children}
    </Tooltip>
  );
}
