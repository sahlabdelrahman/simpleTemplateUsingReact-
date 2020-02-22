import React from 'react';
import {ContactSection, ContactTitle, Span, Form, FormPart, InputText, InputEmail, InputExp, TextArea, InputSubmit} from  './style.js';
import Footer from '../Footer';
const Contact = () => {
  return (
    <React.Fragment>
      <ContactSection>
            <div class="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form>
                    <FormPart>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormPart>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer />
    </React.Fragment>
  );
}

export default Contact;