import React, { FC } from 'react'
import { css } from 'linaria'
import coverImage from '../static/cover.jpg'
import Button, { buttonClassName, bannerButtonClassName } from './Button'

const coverClassName = css`
	background-color: beige;
	height: calc(100vh - 84px);
	background-size: cover;
	text-align: center;

	.${buttonClassName}.${bannerButtonClassName} {
		padding: 14px 30px;
		display: inline-block;
	}
`

const titleClassName = css`
	font-size: 54px;
	font-weight: bold;
	padding-top: 20%;
	font-family: 'roboto';
	margin-bottom: 0;
	padding-bottom: 0;
	color: black;
	margin-top: 0;
`

const subtitleClassName = css`
	font-size: 22px;
	text-align: center;
	font-family: 'roboto';
	padding-top: 0px;
	margin-top: 10px;
`

const Cover: FC = () => (
	<div className={coverClassName} style={{ backgroundImage: 'url(' + coverImage + ')' }}>
		<h1 className={titleClassName}>A DESIGNER'S PORTFOLIO</h1>
		<p className={subtitleClassName}>creative, dedicated, perfectionist</p>

		<Button banner={true} href="#">
			Check Projects
		</Button>
	</div>
)
export default Cover
