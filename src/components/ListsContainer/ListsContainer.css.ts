import {style} from '@vanilla-extract/css'
import { vars } from '../../App.css.ts'

export const listsContainer = style({
  display: 'flex',
  height: 'max-content',
  flexWrap: 'wrap',
  padding: '1rem',
  rowGap: vars.spacing.S3,
  marginRight: vars.spacing.S3,
})
