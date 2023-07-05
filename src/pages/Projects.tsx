import React from 'react'
import Title from '../components/Title/Title.tsx'
import Text from '../components/Text/Text.tsx'

const Projects = () => {
  return (
    <>
      <Title>Projects I worked on</Title>
      <span className='self-start'>
        <a href='https://www.youtube.com/Gh0ssT_'>
          <Title>&gt; Gh0ssT Highlights 2015 - today</Title>
        </a>
      </span>
      <Text>
        Welcome to my flagship project centered around creating and sharing
        highlights from the renowned Slovak Twitch streamer, resttpowered. With great
        care and attention to detail, I handpick and edit every clip for my videos to
        authentically capture the essence of Resttpowered&apos;s distinctive gaming
        style and exceptional talent. This project is fueled by my passion for
        delivering a great experience to viewers, where they can witness firsthand
        the skill that Resttpowered brings to the gaming world. Join me on this
        thrilling journey as we delve into the captivating world of
        Resttpowered&apos;s streams, celebrating the extraordinary moments that have
        made him a beloved and humorous figure in the streaming community.
      </Text>
      <span className='self-start'>
        <Title>&gt; Krabs04 highlights 2022 - 2023</Title>
      </span>
      <Text>
        Prepare to witness the excitement and allure of gambling in its purest form
        as the renowned Czech streamer with exceptional skill, uncanny luck, and
        magnetic personality Opat04 takes you on a trip while I weave together the
        most thrilling moments from his gambling streams. Every video captures the
        essence of the gambling experience, from the tension-filled suspense to the
        triumphant victories that make his stream remarkable.
      </Text>
    </>
  )
}

export default Projects
