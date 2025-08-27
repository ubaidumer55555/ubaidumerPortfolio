import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import sendEmail from "../../Utils/email";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HiOutlineMail } from "react-icons/hi";

// Define validation schema using yup
const schema = yup.object().shape({
  senderEmail: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup
    .string()
    .min(6, "Subject must be at least 6 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(24, "Message must be at least 24 characters")
    .required("Message is required"),
});

function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  // Initialize react-hook-form with yup validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await sendEmail(data);

      if (response) {
        // Handle successful response (e.g., show a success message)
        console.log("Email sent successfully");
        // Show success modal
        setShowModal(true);
        reset();
      } else {
        // Handle error response
        console.error("Failed to send email");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error sending email:", error);
    }
  };

  return (
    <Container className='contact-me-section' id='contact-me'>
      <Container>
        <Row>
          <Col className='contact-me'>
            <h1 style={{ fontSize: "2.6em" }}>
              Let's Connect Via <span className='purple'>Email</span>
            </h1>
            <p>
              Please contact me directly at{" "}
              <a
                href='mailto:ubaid.umer55555@gmail.com'
                style={{ textDecoration: "none" }}
              >
                <span className='purple'>
                  {" "}
                  <b>ubaid.umer55555@gmail.com</b>
                </span>
              </a>{" "}
              or through this form.
            </p>
            <Container className='contact-me-form'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Control
                    size='lg'
                    id='email'
                    name='senderEmail'
                    type='text'
                    placeholder='Your Email'
                    {...register("senderEmail")}
                    isInvalid={!!errors.senderEmail}
                  />
                  {errors.senderEmail && (
                    <Form.Text className='text-danger'>
                      {errors.senderEmail.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className='mt-3'>
                  <Form.Control
                    size='lg'
                    id='subject'
                    name='subject'
                    type='text'
                    placeholder='Subject'
                    {...register("subject")}
                    isInvalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <Form.Text className='text-danger'>
                      {errors.subject.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className='mt-3'>
                  <Form.Control
                    size='lg'
                    id='message'
                    name='message'
                    type='text'
                    placeholder='Your Message'
                    as='textarea'
                    rows={5}
                    {...register("message")}
                    isInvalid={!!errors.message}
                  />
                  {errors.message && (
                    <Form.Text className='text-danger'>
                      {errors.message.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <div className='d-flex justify-content-start mt-4'>
                  <Button
                    variant='primary'
                    type='submit'
                    className='d-flex align-items-center mt-4'
                    style={{
                      minWidth: "150px",
                      justifyContent: "space-around",
                    }}
                  >
                    Send it to me
                    <HiOutlineMail />
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span role='img' aria-label='celebration'>
              🎉 Success! Your Email Has Been Sent!
            </span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Thank you for reaching out! Your message has been sent{" "}
            <span role='img' aria-label='thank you' className='purple'>
              successfully.{" "}
            </span>
            I’ll get back to you as soon as possible. Have a great day! 😊
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ContactMe;
