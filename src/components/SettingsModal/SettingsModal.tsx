import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Switch from "@mui/material/Switch";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { inputProps, modalStyle, textAreaStyle } from "../../constants";

import "./SettingsModal.css";
import { StoreContext } from "../../StoreContext";
import moment from "moment";

const SettingsModal = (props: any) => {
  const { settingsVisible, handleCloseSettings } = props;
  const [date, setDate] = useState<Date | null>(null);
  const [todo, setTodo] = useState<any>({});
  const [text, setText] = useState("");
  const context: any = useContext(StoreContext);
  const { setStore } = context;

  const handleNewsSwitch = (e: any, check: any) => {
    setStore((prev: any) => ({ ...prev, news: check }));
  };

  const handleInputText = (e: any) => {
    setText(e.target.value);
  };
  const handleInputDate = (newValue: any) => {
    setDate(newValue);
  };

  const handleAddTask = () => {
    if (text && date) {
      setTodo({ text, date: moment(date).format("DD/MM") });
      setDate(null);
      setText("");
    }
  };

  useEffect(() => {
    if (todo.text)
      setStore((prev: any) => {
        const sameDate = prev.todos.find(
          (item: any) => item.date === todo.date
        );
        let newArr;
        if (sameDate) {
          newArr = prev.todos.map((item: any) => {
            let result = item;
            if (item.date === todo.date) {
              result.tasks.push({ title: todo.text, done: false });
            }
            return result;
          });
        } else {
          newArr = [...prev.todos];
          newArr.push({
            date: todo.date,
            tasks: [{ title: todo.text, done: false }],
          });
        }
        return {
          ...prev,
          todos: newArr,
        };
      });
  }, [setStore, todo]);

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
                value={text}
                onChange={handleInputText}
              />
            </div>
            <div className="modal_date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Enter task date"
                  value={date}
                  inputFormat="dd/MM/yyyy"
                  onChange={handleInputDate}
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
              <Button
                variant="outlined"
                size="large"
                className="modal_button"
                onClick={handleAddTask}
              >
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
