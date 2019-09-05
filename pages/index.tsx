import React from 'react'
import Header from '../components/Header'
import Cover from '../components/Cover'
import Service from '../components/Service'
import ServiceList from '../components/ServiceList'
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import activityImage from '../static/activity.svg'
import projectImage from '../static/1.jpg'
import project2Image from '../static/2.jpg'
import project3Image from '../static/3.jpg'
import project4Image from '../static/4.jpg'
import archiveImage from '../static/archive.svg'
import webDesignImage from '../static/webDevelopment.svg'
import graphicDesignImage from '../static/graphicDesign.svg'
import logoDesignImage from '../static/logoDesign.svg'
import uxImage from '../static/ux.svg'
import Footer from '../components/Footer'

export default () => (
	<div>
		<Header />
		<Cover />
		<ServiceList
			imageUrl={archiveImage}
			imageAlt={'ArchiveImage'}
			title={'Services'}
			description={
				<>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</>
			}>
			<Service imageUrl={webDesignImage} title={'Web Design/Development'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Service>

			<Service imageUrl={graphicDesignImage} title={'Graphic Design'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Service>

			<Service imageUrl={logoDesignImage} title={'Logo Design'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Service>

			<Service imageUrl={uxImage} title={'UI/UX'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Service>
		</ServiceList>

		<ProjectList imageUrl={activityImage} imageAlt={'ActivityImage'} title={'Projects'} description={<></>}>
			<Project imageUrl={projectImage} title={'Lorem Project'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Project>

			<Project imageUrl={project2Image} title={'Ipsum Project'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Project>

			<Project imageUrl={project3Image} title={'Consectetur Project'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Project>

			<Project imageUrl={project4Image} title={'Tempor Project'} actionUrl={'#'}>
				Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
			</Project>
		</ProjectList>

		<Footer></Footer>
	</div>
)
