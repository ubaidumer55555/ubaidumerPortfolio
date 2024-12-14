import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../Components/Particle";
import pdf from "../../Assets/UbaidUmer-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <Row className='resume'>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className='d-flex justify-content-center'
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            margin: "20px",
          }}
        >
          <Col
            className='d-flex'
            style={{
              marginLeft: "450px",
              justifyContent: "space-evenly",
              marginRight: "450px",
            }}
          >
            <Button
              variant='primary'
              style={{ minWidth: "100px", maxWidth: "250px" }}
              onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
            >
              &nbsp;Previous
            </Button>
            <span
              style={{
                minWidth: "100px",
                maxWidth: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <b className='purple'>
                {" "}
                Page {pageNumber} of {numPages}
              </b>
            </span>
            <Button
              variant='primary'
              style={{ minWidth: "100px", maxWidth: "250px" }}
              onClick={() =>
                setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages)
              }
            >
              &nbsp;Next
            </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
