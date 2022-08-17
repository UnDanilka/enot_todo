import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionStyle } from "../../constants";
import "./Todo.css";

const Todo = () => {
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
          <Typography>
            <div className="summary">
              <div className="summary_block" />
              <div className="summary_label">Accordion 1</div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Todo;
