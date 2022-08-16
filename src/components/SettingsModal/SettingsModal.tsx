import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { useState } from "react";
import { modalStyle } from "../../constants";
import "./SettingsModal.css";

const SettingsModal = (props: any) => {
  const { settingsVisible, handleCloseSettings } = props;
  const [date, setDate] = useState<Date | null>(null);

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
                style={{ color: "white" }}
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
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="modal_send">
              <Button
                style={{ height: "100%" }}
                variant="outlined"
                size="large"
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
