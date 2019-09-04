import React, { FC, ReactNode } from 'react'
import { css } from 'linaria'

const serviceClassName = css`
	width: 100%;
	height: 240px;
	background: #1d1f21;
	border-radius: 2px;

	line-height: 20px;
	color: white;
	font-weight: bold;
	font-size: 14px;
	text-align: center;
	padding-top: 24px;
	padding-bottom: 0;

	&hover: {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}

	p {
		font-family: 'Roboto';
		color: white;
		font-weight: normal;
		text-align: justify;
		padding: 0 24px;
	}

	h3 {
		text-align: justify;
		padding: 0 24px;
		margin-top: 0;
		padding-top: 24px;
	}

	a {
		text-decoration: none;
		text-align: left;
		color: black;
		font-family: 'roboto';
		padding: 0 24px;

		&:hover {
			color: #f2c335;
		}
	}
`

const serviceImageClassName = css`
	width: 50px;
	height: 50px;
	min-width: 50px;
	background-size: cover;
	margin: 0px 24px;
`

interface ServiceProps {
	imageUrl: string
	title: string
	actionUrl: string
	children: ReactNode
}

const Service: FC<ServiceProps> = (props: ServiceProps) => (
	<div className={serviceClassName}>
		<div className={serviceImageClassName} style={{ backgroundImage: 'url(' + props.imageUrl + ')' }} />
		<h3>{props.title}</h3>
		<p>{props.children}</p>
	</div>
)

export default Service
