import { vars } from "../../../App.css.ts";
import { style } from "@vanilla-extract/css";

export const taskWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    padding: vars.spacing.S2,
    borderRadius: '10px',
    backgroundColor: vars.color.task,
    marginBottom: vars.spacing.S2,
    boxShadow: vars.shoadow.basic,
    cursor: 'pointer',

    ":hover" : {
        backgroundColor: vars.color.taskHover,
        transform: 'scale(1.01)',
        transition: 'all 0.1s ease',
    }
})
export const title = style({
    fontSize: vars.fontSizing.T3,
    fontWeight: 'bold',
    marginBottom: vars.spacing.S1,
})
export const description = style({
    fontSize: vars.fontSizing.T4,
    marginBottom: vars.spacing.S1,
})