import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding-left: 95px;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
  }
`;

const AboutText = styled.span`
  color: rgb(204, 214, 246);
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const AboutGreenText = styled.span`
  color: rgb(94, 234, 212);
  font-size: 25px;
  padding-right: 8px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  padding-left: 110px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    margin-top:10px;
  }
`;

const FormGroup = styled.div`
  width: 300px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }
`;

const Label = styled.label`
  display: block;
  color: rgb(204, 214, 246);
  
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: none;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: rgb(204, 214, 246); 
  caret-color: rgb(94, 234, 212); 

  &::placeholder {
    color: rgb(204, 214, 246);
  }

  &:focus {
    border-color: rgb(94, 234, 212);
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }
`;

const Textarea = styled.textarea`
  width: 300px;
  height: 120px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: rgb(204, 214, 246); 
  caret-color: rgb(94, 234, 212); 

  &::placeholder {
    color: rgb(204, 214, 246);
  }

  &:focus {
    border-color: rgb(94, 234, 212);
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(45, 212, 191, 0.1);
  color: rgb(94, 234, 212); 
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const mailtoLink = `mailto:rineeth0206@gmail.com?subject=Hi from ${name}!&body=%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <ContactContainer>
        <AboutText>
          <AboutGreenText>04.</AboutGreenText>Contact
        </AboutText>
      </ContactContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
        </FormGroup>
        <Button type="submit">Say Hello</Button>
      </Form>
    </>
  );
};

export default Contact;
