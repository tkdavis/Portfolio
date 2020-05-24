import React from 'react';
import { Document, Page } from 'react-pdf'
import resumeimg from './resume-tyler.jpg';
import resumepdf from './Resume-Tyler-Davis.pdf';

const Resume = () => {

  return (
    <main role="main">
      <h4 className="mt-4"><a href="https://docs.google.com/document/d/1XbL_cBU2SUmRTYXK_QVywYLRBhdO3aG3xbDfw8FbkaU/view">Download Resume</a></h4>
      <div className="col-sm-8 offset-sm-2 mb-4">
        <Document file={resumepdf}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </main>
  )
};

export default Resume;