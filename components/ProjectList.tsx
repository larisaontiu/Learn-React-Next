import React, { FC, ReactNode } from 'react'
import { css } from 'linaria'
import Button, { buttonClassName, bannerButtonClassName } from './Button'

/*
.${buttonClassName}.${bannerButtonClassName} {
        padding: 14px 30px;
        display: inline-block;
        background-color: #F2C335;
        color:white;
        margin: 40px 0;

        &:hover {
            background-color: black;
        }
    }
    */

const projectListClassName = css`
	padding-top: 100px;
	text-align: center;
	font-family: 'roboto';

	h2 {
		font-size: 28px;
		margin: 0px;
		padding-top: 8px;
	}
`

const projectListIconClassName = css``

const textClassName = css`
	padding: 0 380px;
	color: grey;
	line-height: 24px;
	margin-top: 54px;
`

const projectItemsClassName = css`
	padding: 0 140px;
`

const projectContainerClassName = css`
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 0;
	width: 100%;
`

const projectItemClassName = css`
	padding: 20px 15px;

	&:first-child {
		padding-left: 0;
	}

	&:last-child {
		padding-right: 0;
	}
`

interface ProjectListProps {
	imageUrl: string
	imageAlt: string
	title: string
	description: ReactNode
	children: ReactNode
}

const ProjectList: FC<ProjectListProps> = (props: ProjectListProps) => (
	<div className={projectListClassName}>
		<div className={projectListIconClassName}>
			<img src={props.imageUrl} alt={props.imageAlt} />
		</div>
		<h2>{props.title}</h2>
		<p className={textClassName}>{props.description}</p>
		<div className={projectItemsClassName}>
			<ul className={projectContainerClassName}>
				{React.Children.map(props.children, (child, index) => (
					<li key={index} className={projectItemClassName}>
						{child}
					</li>
				))}
			</ul>
		</div>

		<Button banner={true} href="#">
			Load More
		</Button>
	</div>
)

export default ProjectList
