import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const container =  style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  flexWrap: 'wrap',
  minHeight: 'max-content',
  padding: vars.spacing.S2,
  backgroundColor: vars.color.primaryDark,

})

export const title = style({
    color: vars.color.surface,
    fontSize: vars.fontSizing.T2,
    marginRight: vars.spacing.S1,
})

export const addButton = style({
    color: vars.color.brightText,
    fontSize: vars.fontSizing.T2,
    marginLeft: vars.spacing.S1,
    cursor: 'pointer',

    ":hover" : {
        opacity: 0.8,
    }
})

export const logoutButton = style({
    color: vars.color.brightText,
    fontSize: vars.fontSizing.T2,
    marginLeft: vars.spacing.S1,
    cursor: 'pointer',
})

export const boardItem = style({
    color: vars.color.brightText,
    fontSize: vars.fontSizing.T3,
    backgroundColor: vars.color.secondary,
    padding: vars.spacing.S2,
    borderRadius: "10px",
    cursor: 'pointer',
    marginRight: vars.spacing.S1,

    ":hover" : {
        opacity: 0.8,
        transform: 'scale(1.03)',
    }
})

export const boardActiveItem = style({
    fontSize: vars.fontSizing.T3,
    backgroundColor: vars.color.updateButton,
    color: vars.color.surface,
    padding: vars.spacing.S2,
    borderRadius: "10px",


    ":hover" : {
        opacity: 0.8,
        transform: 'scale(1.03)',
    }
})

export const addSection = style({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
})
export const smallTitle = style({
    color: vars.color.brightText,
    fontSize: vars.fontSizing.T3,
})