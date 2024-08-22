import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import './MySkills.css'
export const MySkills = () => {
  const skills = [
    { img: meter1, title: "Web Development", description: "Building responsive and dynamic websites using modern technologies." },
    { img: meter2, title: "Brand Identity", description: "Creating strong and recognizable brand identities." },
    { img: meter3, title: "Logo Design", description: "Designing unique and impactful logos that stand out." },
    { img: meter1, title: "Full-Stack Development", description: "Specializing in full-stack development using JavaScript and frameworks." }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow fadeInUp">
              <h2>My Skills</h2>
              <p>Here is a showcase of the skills I have mastered over the years, including web development, brand identity, and logo design. Each skill is supported by extensive experience and a deep understanding of modern practices.</p>
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="skill-card">
                      <div className="skill-card-inner">
                        <img src={skill.img} alt={skill.title} className="skill-icon" />
                        <h5>{skill.title}</h5>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
