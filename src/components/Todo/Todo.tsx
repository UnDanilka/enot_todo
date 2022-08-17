import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionStyle } from "../../constants";
import "./Todo.css";

const Todo = (props: any) => {
  const { todo } = props;
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
            console.log(i % 3);
            return (
              <div className="todo_task" key={i}>
                <div className={`todo_task_block-${i % 3}`} />
                <div className="todo_task_label">{task}</div>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Todo;
