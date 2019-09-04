import React, { FC, ReactNode } from 'react'
import { css } from 'linaria'

const projectClassName = css`
	width: 100%;
	height: 350px;
	background: white;
	border-radius: 2px;

	line-height: 20px;
	color: black;
	font-weight: bold;
	font-size: 14px;
	text-align: left;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}

	p {
		font-family: 'Roboto';
		color: grey;
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

	/* 
        .project .projectImage:after {
        display: block;
        content: ' ';
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        } */
`

const projectImageClassName = css`
	width: 100%;
	height: 175px;
	min-width: 280px;
	background-size: cover;
`

interface ProjectProps {
	imageUrl: string
	title: string
	actionUrl: string
	children: ReactNode
}

const Project: FC<ProjectProps> = (props: ProjectProps) => (
	<div className={projectClassName}>
		<div className={projectImageClassName} style={{ backgroundImage: 'url(' + props.imageUrl + ')' }} />
		<h3>{props.title}</h3>
		<p>{props.children}</p>

		<a href={props.actionUrl}>Read More</a>
	</div>
)

export default Project
