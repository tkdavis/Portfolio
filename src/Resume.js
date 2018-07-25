import React from 'react';
import resumeimg from './resume-tyler.jpg'

const Resume = () => {

  return (
    <main role="main">
      <h4 className="mt-4"><a href="https://docs.google.com/document/d/1ndRZQaTn3QyjlVczDMkOMBh-BfoGq04jT5gOaCJwkZ0/edit?usp=sharing">Download Resume</a></h4>
      <div class="col-sm-8 offset-sm-2 mb-4">
        <img className="card-img-top" src={resumeimg}></img>
      </div>
    </main>
  )
};

export default Resume;