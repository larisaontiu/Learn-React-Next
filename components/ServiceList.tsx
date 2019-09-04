import React, { FC, ReactNode } from 'react'
import { buttonClassName, bannerButtonClassName } from './Button'
import { css } from 'linaria'

/**
 
.${buttonClassName}.${bannerButtonClassName} {
        padding: 14px 30px;
        display: inline-block;
        background-color: #F2C335;
        color:white;
        margin: 40px 0;

        &:hover {
            background-color: black;;
        }
    }
 */

const serviceListClassName = css`
	padding-top: 100px;
	text-align: center;
	font-family: 'roboto';

	h2 {
		font-size: 28px;
		margin: 0px;
		padding-top: 8px;
	}
`

const serviceListIconClassName = css``

const text1ClassName = css`
	padding: 0 380px;
	color: grey;
	line-height: 24px;
	margin-top: 54px;
`

const serviceItemsClassName = css`
	padding: 0 140px;
`

const serviceContainerClassName = css`
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 0;
	width: 100%;
`

const serviceItemClassName = css`
	padding: 20px 15px;

	&:first-child {
		padding-left: 0;
	}

	&:last-child {
		padding-right: 0;
	}
`

interface ServiceListProps {
	imageUrl: string
	imageAlt: string
	title: string
	description: ReactNode
	children: ReactNode
}

const ServiceList: FC<ServiceListProps> = (props: ServiceListProps) => (
	<div className={serviceListClassName}>
		<div className={serviceListIconClassName}>
			<img src={props.imageUrl} alt={props.imageAlt} />
		</div>
		<h2>{props.title}</h2>
		<p className={text1ClassName}>{props.description}</p>
		<div className={serviceItemsClassName}>
			<ul className={serviceContainerClassName}>
				{React.Children.map(props.children, (child, index) => (
					<li key={index} className={serviceItemClassName}>
						{child}
					</li>
				))}
			</ul>
		</div>
	</div>
)

export default ServiceList
