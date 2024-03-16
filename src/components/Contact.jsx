import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // add code to send form data to server
        console.log(formData);
    };

    return (
        <section id='contact'>
            <h2>Contact Me</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' value={formData.message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <div className='contact-info'>
                <h3>Contact Information</h3>
                <p><strong>Email: </strong> andwellm89@gmail.com</p>
                <p><strong>Instagram:</strong> @EowynStark</p>
                <p><strong>GitHub:</strong>EowynStark</p>
            </div>
        </section>
    );
}

export default Contact;