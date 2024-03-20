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
            [name]: value,
            [email]: value,
            [message]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // add code to send form data to server
        console.log(formData);
    };

    return (
        <div className='p-3 mb-2 bg-warning text-dark'>
            <div className='p-3 mb-2 bg-warning text-center text-dark card'>            <h2>Contact Me</h2>
            <p>Feel free to reach out to me with any questions or opportunities!</p>
            <p>Fill out the form below to get in touch with me*.</p>
            <form className='mb-3' id='contact-form' onSubmit={handleSubmit}>
                <div className='row mb-3'>
                <div className='row'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div className='row'>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className='row'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' value={formData.message} onChange={handleChange} />
                </div>
                <button type='submit' className='btn btn-secondary disabled col'>Submit</button>
                </div>
            </form>
            <p>*Submit button disabled until contact functionality is enabled</p>
            </div>
            <div className='p-3 mb-2 bg-warning text-center text-dark card' style={{width:'20rem'}}>
                <h3>Contact Information</h3>
                <p><strong>Email: </strong> andwellm89@gmail.com</p>
                <p><strong>Instagram:</strong> @EowynStark</p>
                <p><strong>GitHub:</strong>EowynStark</p>
            </div>
        </div>
    );
}

export default Contact;