import { about } from "../portfolio";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
  return <section id="about" className="about">
    {about?.fullName && (<h1 className="about__title">Hi, I am <span>{about.fullName}</span></h1>)}
    {about?.role && (<h3 className="about__role">{about.role}</h3>)}
    {about?.description && (<p className="about__description">{about.description}</p>)}
    {about.social && (
    <div className="about__social">
      {about?.social?.linkedin && (<a href={about.social.linkedin} target="_blank"><LinkedInIcon fontSize="large" /></a>)}
      {about?.social?.github && (<a href={about.social.github} target="_blank"><GitHubIcon fontSize="large" /></a>)}
    </div>
    )}
  </section>;
}

export default About;
