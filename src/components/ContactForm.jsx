import { useState } from "react";
import api from "../services/api";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({
        loading: false,
        success: null,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus({ loading: true, success: null, message: "" });

        try {
            const response = await api.post("/contact", {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            });

            setStatus({
                loading: false,
                success: true,
                message: response.data.message || "Message submitted successfully!"
            });

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setErrors({});
        } catch (err) {
            const errorMessage =
                err.response?.data?.error ||
                "Failed to send message. Please ensure the backend server is running.";

            setStatus({
                loading: false,
                success: false,
                message: errorMessage
            });
        }
    };

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            {status.message && (
                <div
                    className={`form-status ${status.success ? "status-success" : "status-error"}`}
                >
                    {status.message}
                </div>
            )}

            <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    disabled={status.loading}
                />

                {errors.name && (
                    <p className="error">{errors.name}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    disabled={status.loading}
                />

                {errors.email && (
                    <p className="error">{errors.email}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    disabled={status.loading}
                ></textarea>

                {errors.message && (
                    <p className="error">{errors.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={!isFormValid || status.loading}
            >
                {status.loading ? "Sending..." : "Send Message"}
            </button>

        </form>
    );
}

export default ContactForm;
