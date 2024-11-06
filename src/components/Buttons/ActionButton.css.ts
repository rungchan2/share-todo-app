import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";


export const taskButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  height: 'max-content',
  borderRadius: "4px",
  marginTop: vars.spacing.S3,
  fontSize: vars.fontSizing.T3,
  padding: vars.spacing.S2,
  border: "none",
  cursor: "pointer",
  color: vars.color.error,

  ":hover": {
    backgroundColor: vars.color.border,
    transition: "all 0.3s ease",
  }
})

export const listButton = style({
  display: "flex",
  alignItems: "center",
  height: "max-content",
  minWidth: "100px",
  borderRadius: "4px",
  marginTop: vars.spacing.S2,
  fontSize: vars.fontSizing.T3,
  padding: vars.spacing.S2,
  border: "none",
  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.color.border,
    transition: "all 0.3s ease",
  }
})