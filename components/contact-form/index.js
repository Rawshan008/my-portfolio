import { useState } from "react";

const ContactForm = () => {
  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Submitting ...");

    const formElements = [...event.currentTarget.elements];

    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

    const validFormElements = isValid ? formElements : [];
    console.log(validFormElements);

    if (validFormElements.length < 1) {
      setSubmitText("It looks like you filled out too many fields!");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText("Successfully submitted!");
        })
        .catch((_) => {
          setSubmitText(
            "There was an error with your submission, please email me using the address above."
          );
        });
    }
  };

  const [submitText, setSubmitText] = useState(null);
  return (
    <div>
      <form
        action="/success"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={(e) => onSubmit(e, setSubmitText)}
        className="w-full"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bitter text-body-color font-bold uppercase text-xl block mb-3"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full py-2 px-2 border border-black rounded-sm border-opacity-10 text-body-color focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="font-bitter text-body-color font-bold uppercase text-xl block mb-3"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="w-full py-2 px-2 border border-black rounded-sm border-opacity-10 text-body-color focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="font-bitter text-body-color font-bold uppercase text-xl block mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full py-2 px-2 border border-black rounded-sm border-opacity-10 text-body-color focus:outline-none focus:shadow-outline h-40"
          >
            {" "}
          </textarea>
        </div>

        <div className="mb-2">
          <button
            type="submit"
            className="bg-base-color uppercase text-white text-xl font-bitter text-xl py-2 w-40 inline-block rounded-sm transition-all duration-500 hover:bg-body-color"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mb-10">{submitText && submitText}</div>
    </div>
  );
};

export default ContactForm;
