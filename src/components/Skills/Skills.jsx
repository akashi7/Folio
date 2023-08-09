/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import './Skills.css'

const Skills = () => {
  // const { skills } = useSelector((store) => store.skills);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSkills());
  // }, []);

  const skills = [
    { type: 'Javascript' },
    { type: 'TypeScript' },
    { type: 'ReactJs' },
    { type: 'NodeJs' },
    { type: 'React_native' },
    { type: 'ExpressJs' },
    { type: 'NestJs' },
  ]

  return (
    <section className='padding' id='skills'>
      <h1 className='section-title'>Languages & Technologies.</h1>
      <div className='skills-container'>
        {/* <SkillBar skills={skills} height={20} /> */}
        <div>
          <p>Javascript</p>
          <ProgressBar completed={80} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>TypeScript</p>
          <ProgressBar completed={70} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>ReactJs</p>
          <ProgressBar completed={90} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>NodeJs</p>
          <ProgressBar completed={70} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>React_native</p>
          <ProgressBar completed={70} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>ExpressJs</p>
          <ProgressBar completed={80} bgColor='green' isLabelVisible={false} />
        </div>
        <div>
          <p>NestJs</p>
          <ProgressBar completed={80} bgColor='green' isLabelVisible={false} />
        </div>
      </div>
    </section>
  )
}

export default Skills
