import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const logItem = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: vars.color.surface,

  ":hover": {
    backgroundColor: vars.color.primaryDark
  }
});
export const logMessage = style({
  fontSize: "1rem",
  marginBottom: "0.5rem"
});

export const logDate = style({
  fontSize: "0.8rem",
  color: "#666",
  marginBottom: "0.25rem"
});

export const logAuthor = style({
  fontSize: "0.8rem",
  color: "#666"
});
