import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const container = style({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: '10px',
})

export const input = style({
  padding: vars.spacing.S2,
  fontSize: vars.fontSizing.T4,
  border: 'none',
  minHeight: '30px',
})

export const check = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  cursor: 'pointer',
  ":hover": {
    opacity: 0.8
  }
})