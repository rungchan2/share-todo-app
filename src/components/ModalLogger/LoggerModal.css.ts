import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const loggerModal = style({
  backgroundColor: vars.color.surface,
  width: "500px",
  height: "500px",
  padding: "1rem"
});


export const modalBackground = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "1rem",
});

export const loggerModalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  borderBottom: `1px solid ${vars.color.border}`
});

export const loggerModalContent = style({
  padding: "1rem",
  maxHeight: "400px",
  overflow: "scroll",
});

export const closeButton = style({
  cursor: "pointer",
  fontSize: "32px",
  color: vars.color.secondary,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "50%",

  ":hover": {
    backgroundColor: vars.color.primaryDark,
  }
});