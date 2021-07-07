import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();


    }

    return (
        <section className='mt-5'>
            <Container className='justify-content-center'>
                <h4 className='text-center'>Contact Form</h4>
                <form id='contact-form' onSubmit={handleSubmit} action='mailto:kaletevans@ygmail.com'>
                    <div style={{ width: "100%" }}>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                    </div>
                    <div style={{ width: "100%" }}>
                        <label htmlFor='email'>Email Address:</label>
                        <input type='email' name='email' onBlur={handleChange} defaultValue={email}/>
                    </div>
                    <div style={{ width: "100%" }}>
                        <label htmlFor='message'>Message:</label>
                        <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </Container>
        </section>
    )
}

export default ContactForm;