import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionStyle } from "../../constants";
import styled from "@emotion/styled";
import { Switch, SwitchProps } from "@mui/material";
import "./Todo.css";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "grey",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#366EFF",
    opacity: 1,
  },
}));

const Todo = (props: any) => {
  const context: any = useContext(StoreContext);
  const { setStore } = context;
  const { todo } = props;

  const handleDoneChange = (id: any, e: any, check: any) => {
    setStore((prev: any) => {
      let newArr = [...prev.todos];
      newArr = newArr.map((dateObj: any) => {
        return {
          date: dateObj.date,
          tasks: dateObj.tasks.map((taskObj: any) => {
            if (taskObj.id === id) {
              return { ...taskObj, done: check };
            } else {
              return taskObj;
            }
          }),
        };
      });
      return { ...prev, todos: newArr };
    });
  };

  return (
    <div className="todo">
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={
            <div className="icon_wrapper">
              <ExpandMoreIcon style={{ color: "black" }} />
            </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="summary">
            <div className="summary_block" />
            <div className="summary_label">{todo.date} Tasks</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {todo.tasks.map((task: any, i: number) => {
            return (
              <div className="todo_task" key={i}>
                <div className="todo_task_left">
                  <div className={`todo_task_block-${i % 3}`} />
                  <div
                    className={` ${
                      task.done ? "todo_task_label_done" : "todo_task_label"
                    } `}
                  >
                    {task.title}
                  </div>
                </div>
                <IOSSwitch
                  onChange={(e, check) => handleDoneChange(task.id, e, check)}
                />
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Todo;
