import {
  TbSunHigh as LightModeIcon,
  TbMoonFilled as DarkModeIcon,
} from "react-icons/tb";

function DarkModeSwitcher({ isDarkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="tw-p-1 tw-scale-125">
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}

export default DarkModeSwitcher;
