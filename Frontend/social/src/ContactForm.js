import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';
import Navbar from './Navbar';
import contact from './contact.png';

const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        complain: ''
    });

    const { name, email, complain } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/contacts', formData);
            console.log(res.data); // Log response
            setFormData({
                name: '',
                email: '',
                complain: ''
            });
            alertmessage(); 
        } catch (err) {
            console.error(err);
        }
    };

    const alertmessage = () => {
        window.alert("Your Query is saved");
        navigate('/');
    }

    return (
        <div>
            <Navbar />
            <div className='main'>
                <div className='image'>
                    <img className='contactimage' src={contact} alt="Internal Error"/>
                </div>
                <div className='data'>
                    <form className='form' onSubmit={e => onSubmit(e)}>
                        <div>
                            <label className='labels'>NAME</label><br/><br/>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={e => onChange(e)}
                                required
                                className='namecon'
                            />
                        </div>
                        <br/><br/>
                        <div>
                            <label className='labels'>E-MAIL</label><br/><br/>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                                required
                                className='emailcon'
                            />
                        </div>
                        <br/><br/>
                        <div>
                            <label className='labels'>COMPLAIN</label><br/><br/>
                            <input
                                type="text"
                                placeholder="Enter your Complain"
                                name="complain"
                                value={complain}
                                onChange={e => onChange(e)}
                                className='complaincon'
                            />
                        </div>
                        <br/><br/>
                        <input type="submit" className='sub' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
