import React, { FC } from 'react'
import { css } from 'linaria'
import classnames from 'classnames'

export const buttonClassName = css`
	color: black;
	display: inline-block;
	margin-right: 15px;
	text-decoration: none;
	font-family: 'roboto';
	font-size: 14px;
	padding: 5px 10px;
	transition: 250ms all;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		color: whitesmoke;
	}
`

export const bannerButtonClassName = css`
	color: black;
	background-color: white;
	padding-top: 10px;
	padding-bottom: 10px;
	border: none;
	border-radius: 4px;

	&:hover {
		color: white;
		background-color: black;
	}
`

interface ButtonProps {
	children: string
	href: string
	banner?: boolean
}

const Button: FC<ButtonProps> = (props: ButtonProps) => (
	<a href={props.href} className={classnames(buttonClassName, props.banner ? bannerButtonClassName : false)}>
		{props.children}
	</a>
)

export default Button
