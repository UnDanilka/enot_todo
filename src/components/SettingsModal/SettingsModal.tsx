import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Switch from "@mui/material/Switch";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { inputProps, modalStyle, textAreaStyle } from "../../constants";

import "./SettingsModal.css";
import { StoreContext } from "../../StoreContext";

const SettingsModal = (props: any) => {
  const { settingsVisible, handleCloseSettings } = props;
  const [date, setDate] = useState<Date | null>(null);
  const context: any = useContext(StoreContext);

  const handleNewsSwitch = (e: any, check: any) => {
    context.setStore((prev: any) => ({ ...prev, news: check }));
  };

  return (
    <Modal open={settingsVisible} onClose={handleCloseSettings}>
      <Box sx={modalStyle}>
        <div className="modal_content">
          <div className="modal_title">Add new task</div>
          <div className="modal_add-task">
            <div className="modal_input">
              <TextField
                label="Add task"
                variant="outlined"
                inputProps={inputProps}
                sx={textAreaStyle}
              />
            </div>
            <div className="modal_date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={date}
                  inputFormat="dd/MM/yyyy"
                  onChange={(newValue: any) => {
                    setDate(newValue);
                  }}
                  renderInput={(params: any) => (
                    <TextField
                      inputProps={inputProps}
                      sx={{
                        ...textAreaStyle,
                        input: { color: "white" },
                        svg: { color: "white" },
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="modal_send">
              <Button variant="outlined" size="large" className="modal_button">
                ADD
              </Button>
            </div>
          </div>
          <div className="modal_title">Manage news</div>
          <div className="modal_switch">
            <div className="modal_switch_label">
              <div className="modal_switch_text">On</div>
            </div>
            <Switch checked={context.store.news} onChange={handleNewsSwitch} />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
