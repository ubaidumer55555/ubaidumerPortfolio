import emailjs from "emailjs-com";

export default async function sendEmail(
  templateParams: Record<string, unknown> | undefined
) {
  return await emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
      templateParams,
      process.env.REACT_APP_EMAILJS_PRIVATE_KEY
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        return response;
      },
      (error) => {
        console.log("FAILED...", error);
        return;
      }
    );
}
