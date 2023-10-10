import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer } from './ProjectsStyle' //, ToggleButton, Divider, Desc, ToggleButtonGroup,
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle] = useState('all'); //, setToggle
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {/* {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))} */}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
