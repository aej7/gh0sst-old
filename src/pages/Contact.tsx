import Title from '../components/Title/Title.tsx'
import Text from '../components/Text/Text.tsx'
import emailSvg from '../assets/email.svg'
import linkedinSvg from '../assets/linkedin.svg'
import twitterSvg from '../assets/twitter.svg'
import youtubeSvg from '../assets/youtube.svg'

const linksMap = new Map([
  [emailSvg, ''],
  [linkedinSvg, 'PLACEHOLDER-PLACEHOLDER-PLACEHOLDER'],
  [twitterSvg, 'https://twitter.com/Gh0ssT_'],
  [youtubeSvg, 'https://www.youtube.com/@Gh0ssT'],
])

const Contact = () => {
  return (
    <>
      <Title>Contact me</Title>
      <Text>
        If you have any questions, collaboration opportunities, or other inquiries,
        feel free to reach out using any of the information below. I am constantly
        eager to explore new projects and welcome any possibilities for
        collaboration.
      </Text>
      <p className='flex flex-row place-content-evenly max-w-full'>
        {[...linksMap].map(([key, value]) => (
          <a href={value} key={key}>
            <img src={key} alt={value} className='w-16 h-16' />
          </a>
        ))}
      </p>
    </>
  )
}

export default Contact

