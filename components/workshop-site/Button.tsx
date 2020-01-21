import '../../styles/Button.css'

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, SFC } from 'react'

type JSXAnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
type JSXButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = {
  url?: string
} & (JSXAnchorProps | JSXButtonProps)

export const Button:SFC<ButtonType> = (props) => {
  const { url } = props;
  if (url) {
    const { children, onClick, className, ...rest} = (props as JSXAnchorProps);
    return <a onClick={onClick} className={`btn ${className || ''}`} href={url} {...rest}>{children}</a>
  }
  const { children, onClick, className, ...rest} = (props as JSXButtonProps);
  return <button onClick={onClick} role="button" className={`btn ${className || ''}`} {...rest}>{children}</button>
}
