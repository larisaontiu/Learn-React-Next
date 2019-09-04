import React, { FC } from 'react'
import { css } from 'linaria'

const footerClassName = css`
	width: 100%;
	background-color: #1d1f21;
	height: 160px;
	margin-top: 100px;
	text-align: center;
	font-family: 'roboto';
	font-size: 14px;

	color: white;
	padding-top: 40px;
`

const Footer: FC = () => (
	<div className={footerClassName}>
		<p>Dalumvej Odense, Denmark</p>
		<p>+45 000 000 00</p>
		<p>asd123@gmail.com</p>
	</div>
)

export default Footer
