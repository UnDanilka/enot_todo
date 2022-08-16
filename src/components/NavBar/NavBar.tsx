import { useState } from "react";
import "./NavBar.css";
import { ReactComponent as SettingsIcon } from "./Settings.svg";
import SettingsModal from "../SettingsModal/SettingsModal";

const NavBar = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handleOpenSettings = () => {
    setSettingsVisible(true);
  };
  const handleCloseSettings = () => {
    setSettingsVisible(false);
  };

  return (
    <div className="navbar">
      <div className="navbar_name">
        <div className="navbar_name_text">To Do</div>
      </div>
      <div className="navbar_settings" onClick={handleOpenSettings}>
        <SettingsIcon />
      </div>
      <SettingsModal
        settingsVisible={settingsVisible}
        handleCloseSettings={handleCloseSettings}
      />
    </div>
  );
};

export default NavBar;
