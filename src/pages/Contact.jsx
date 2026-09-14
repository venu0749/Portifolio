import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <section className="contact">

            <h1>Contact Me</h1>

            <p className="contact-intro">
                Have a question or want to work together?
                Feel free to send me a message.
            </p>

            <ContactForm />

        </section>
    );
}

export default Contact;