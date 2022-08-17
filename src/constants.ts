export const modalStyle = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "grey",
  backdropFilter: "blur(4px)",
  border: "2px solid white ",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

export const textAreaStyle = {
  "& .MuiInputLabel-root": { color: "white !important" }, //styles the label
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "white",
      color: "white !important",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "white",
      color: "white !important",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "white !important",
    },
  },
};

export const inputProps = { style: { color: "white" } };

export const accordionStyle = {
  background: "#3a3939",
  boxShadow:
    "16px 16px 20px rgba(66, 66, 66, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
  borderRadius: "25px !important",
  color: "white",
  border: "3px solid rgb(54, 53, 53)",
};
