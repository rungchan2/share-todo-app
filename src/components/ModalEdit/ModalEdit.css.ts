import { style } from '@vanilla-extract/css'
import { vars } from '../../App.css.ts'

export const modalBackground = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const modalEdit = style({

  backgroundColor: vars.color.surface,
  padding: '2rem',
  borderRadius: '0.5rem',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  width: '500px',
  zIndex: 1000
})

export const modalCloseButton = style({
  cursor: 'pointer',
  fontSize: '2.5rem',
  color: vars.color.onSurface,
  padding: '0.5rem',
  ':hover': {
    backgroundColor: vars.color.divider,
    borderRadius: '50%'
  }
})

export const modalEditHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem'
})

export const modalEditTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold'
})

export const modalEditForm = style({
  display: 'flex', 
  flexDirection: 'column',
  gap: '1rem'
})

export const modalEditLabel = style({
  fontSize: '1rem',
  fontWeight: 'bold'
})

export const modalEditInput = style({
  padding: '0.5rem',
  border: `1px solid ${vars.color.border}`,
  borderRadius: '0.25rem',
  fontSize: '1rem'
})

export const modalEditButton = style({
  padding: '0.5rem 1rem',
  backgroundColor: vars.color.secondary,
  color: vars.color.surface,
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  fontSize: '1rem',
  ':hover': {
    backgroundColor: vars.color.secondaryDark
  }
})

export const modalDeleteButton = style({
  padding: '0.5rem 1rem',
  backgroundColor: vars.color.error,
  color: vars.color.surface,
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  fontSize: '1rem',
  marginLeft: '1rem',
  ':hover': {
    backgroundColor: vars.color.onError
  }
})
