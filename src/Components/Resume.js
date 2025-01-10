import React from "react";

const Resume = ({ data }) => {
  if (!data) return null;

  const {
    skillmessage,
    education = [],
    work = [],
    coreSkills = [],
    secondarySkills = [],
  } = data;

  const renderHTML = (html) => ({ __html: html });

  const renderEducation = () =>
    education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.school}</h3>
        {edu.description ? (
          <p dangerouslySetInnerHTML={renderHTML(edu.description)} />
        ) : (
          <p>No description available.</p>
        )}
      </div>
    ));

  const renderWork = () =>
    work.map((job, index) => (
      <div key={index}>
        <h3>{job.company}</h3>
        <p className="info">
          <span dangerouslySetInnerHTML={renderHTML(job.title)} />
          <span>&bull;</span> <em className="date">{job.years}</em>
        </p>
        {job.description?.length > 0 ? (
          <ul>
            {job.description.map((desc, idx) => (
              <li style={{ marginBottom: "12px" }} key={idx}>
                <span dangerouslySetInnerHTML={renderHTML(desc)} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No job description provided.</p>
        )}
      </div>
    ));

  const renderCoreSkills = () =>
    coreSkills.map((skill, index) => {
      const className = `bar-expand ${skill.name.toLowerCase()}`;
      return (
        <li key={index}>
          <em>{skill.name}</em>
        </li>
      );
    });
  const renderSecondarySkills = () =>
    secondarySkills.map((skill, index) => {
      const className = `bar-expand ${skill.name.toLowerCase()}`;
      return (
        <li key={index}>
          <em>{skill.name}</em>
        </li>
      );
    });

  return (
    <section id="resume">
      {/* <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{renderEducation()}</div>
          </div>
        </div>
      </div> */}

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{renderWork()}</div>
      </div>
      <div>
        <div className="row skills-container">
          <div className="skill-section">
            <div className="header-col">
              <h1>
                <span>Core Skills</span>
              </h1>
            </div>
            <div className="main-col">
              {skillmessage ? (
                <p dangerouslySetInnerHTML={renderHTML(skillmessage)} />
              ) : (
                <p></p>
              )}
              <ul className="skills">{renderCoreSkills()}</ul>
            </div>
          </div>

          <div className="skill-section">
            <div className="header-col">
              <h1>
                <span>Secondary Skills</span>
              </h1>
            </div>
            <div className="main-col">
              {skillmessage ? (
                <p dangerouslySetInnerHTML={renderHTML(skillmessage)} />
              ) : (
                <p></p>
              )}
              <ul className="skills">{renderSecondarySkills()}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
