import React from 'react'
import PageHeader from '../../components/page-header';
import './contact-page.scss';

class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    formErrors: {name: '', email: ''},
    nameValid: false,
    emailValid: false,
    formValid: false,
    formSentMessage: ''
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      formSentMessage: ''
    }, () => this.validateField(name, value));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formValid) {
      const { name, email, message } = this.state;
      window.Email.send({
        SecureToken : "dca369eb-4cd3-4dc6-b035-48966dcd5978",
        To : "danylenko.ivan11@gmail.com",
        From : "danylenkoivan.ru@gmail.com",
        Subject : "Message from portfolio site",
        Body : `<p>Person name: <b>${name}</b>.</p>
                <p>Person email: ${email}.</p>
                <p>Person message:</p>
                <p>${message}</p>`
      }).then(() => { 
        this.setState({
          name: '',
          email: '',
          message: '',
          formErrors: {name: '', email: ''},
          nameValid: false,
          emailValid: false,
          formValid: false,
          formSentMessage: 'Your message was sent successfully'
        });
      });
    }
  }
  
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '': 'Name is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({formValid: this.state.nameValid && this.state.emailValid});
  }

  render() {
    const { name, email, message, formErrors, formValid, formSentMessage } = this.state;
    return (
      <section className="contact">
        <div className="container">
          <PageHeader headerText={"Contact"} />

          <form className="box" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" placeholder="Name *"
                  value={name}
                  onChange={ this.handleUserInput } />
                <p className="error">{ formErrors.name }</p>
              </div>
              <div className="col-md-6 form-group">
                <input type="text" name="email" placeholder="Email *"
                  value={email}
                  onChange={ this.handleUserInput } />
                <p className="error">{ formErrors.email }</p>
              </div>
              <div className="col-md-12 form-group">
                <textarea type="text" name="message" placeholder="Your message"
                  value={message}
                  onChange={ this.handleUserInput } />
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn-st" disabled={!formValid}>Send Message</button>
                <p className="success">{ formSentMessage }</p>
              </div>
            </div>
          </form>


          <div className="contact__info box">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <a href="https://t.me/danylenko11" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-paper-plane"></i>
                  <p>@danylenko11</p>
                  <span>Telegram</span>
                </a>
							</div>
              <div className="col-lg-4 col-sm-12">
                <a href="skype:danylenko11">
                  <i className="fab fa-skype"></i>
                  <p>danylenko11</p>
                  <span>Skype</span>
                </a>
							</div>
              <div className="col-lg-4 col-sm-12">
                <a href="https://www.google.com/maps/place/Kyiv,+02000/@50.401699,30.252505,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Kiev, Ukraine</p>
                  <span>Address</span>
                </a>
							</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactPage
