import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../Components/Particle";
import pdf from "../../Assets/Ubaid_Umer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Served from /public so Vite doesn't transform the worker (breaks in browser)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadError, setLoadError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadError(null);
  };

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error("PDF load error:", error);
              setLoadError(error?.message || "Failed to load PDF");
            }}
            loading={<div className="resume-status">Loading resume…</div>}
            error={
              <div className="resume-status">
                {loadError || "Could not display resume."}{" "}
                <a href={pdf} target="_blank" rel="noreferrer">
                  Open PDF
                </a>
              </div>
            }
            className="d-flex justify-content-center resume-document"
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              className="resume-page"
              renderTextLayer
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>
        <Row className="resume-controls">
          <Col className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <Button
              variant="primary"
              style={{ minWidth: "100px", maxWidth: "250px" }}
              disabled={!numPages || pageNumber <= 1}
              onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
            >
              Previous
            </Button>
            <span className="resume-page-label">
              <b className="purple">
                Page {pageNumber}
                {numPages ? ` of ${numPages}` : ""}
              </b>
            </span>
            <Button
              variant="primary"
              style={{ minWidth: "100px", maxWidth: "250px" }}
              disabled={!numPages || pageNumber >= numPages}
              onClick={() =>
                setPageNumber((page) =>
                  numPages ? Math.min(numPages, page + 1) : page,
                )
              }
            >
              Next
            </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
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
