import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const container = style({
  width: "272px",
  padding: "16px",
  backgroundColor: vars.color.surface,
  boxShadow: vars.shoadow.basic,
  display: 'flex',
  flexDirection: 'column',
  gap: "8px",
  
  ':hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  }
})

export const input = style({
  width: "100%",
  minHeight: "80px",
  padding: "8px",
  border: `1px solid ${vars.color.border}`,
  resize: 'vertical',
  fontSize: vars.fontSizing.T4,
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary,
    boxShadow: `0 0 0 2px ${vars.color.primary}25`,
  }
})

export const buttonContainer = style({
  display: 'flex',
  gap: "8px",
  marginTop: "8px",
  justifyContent: 'center',
  alignItems: 'center',
})

export const button = style({
  flex: 3,
  padding: "16px",
  border: 'none',
  backgroundColor: vars.color.primary,
  color: vars.color.brightText,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.primaryDark,
  },
  ':active': {
    transform: 'scale(0.98)',
  }
})

export const closeButton = style({
  flex: 0.8,
  color: vars.color.error,
  height: "100%",
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',

  ':hover': {
    backgroundColor: vars.color.list,
  },
  ':active': {
    transform: 'scale(0.98)',
  }
})