import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const listWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    marginRight: vars.spacing.S3,
    padding: vars.spacing.S2,
    minWidth: vars.minWidth.list,
    width: 'max-content',
    height: 'max-content',
    borderRadius: '10px',
    backgroundColor: vars.color.list,
    rowGap: vars.spacing.S2,
})
export const Name = style({
    fontSize: vars.fontSizing.T3,
    marginBottom: vars.spacing.S2,
})
export const header = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})
export const deleteButton = style({
    padding: vars.spacing.S1,
    borderRadius: '20px',
    fontSize: vars.fontSizing.T2,
    marginLeft: 'auto',
    marginTop: '-15px',
    marginRight: '5px',
    cursor: 'pointer',
    backgroundColor: vars.color.background,

    ":hover" : 
    {
        backgroundColor: vars.color.task,
        boxShadow: vars.shoadow.basic,
        opacity: 0.8,
    }
})