import {
  TbSunHigh as LightModeIcon,
  TbMoonFilled as DarkModeIcon,
} from "react-icons/tb";
import IconButton from "./IconButton";

function DarkModeSwitcher({ isDarkMode, toggleDarkMode }) {
  return (
    <IconButton onClick={toggleDarkMode}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default DarkModeSwitcher;
