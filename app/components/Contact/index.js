import React, { Component, Fragment } from 'react';
import Airtable from 'airtable';

import './styles.scss';

const base = new Airtable({ apiKey: 'keynj1B4ygPySCcy6' }).base('appFSzlqSvMpryzY5');

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      company: '',
      success: false,
      err: false,
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleCompany(event) {
    this.setState({ company: event.target.value });
  }

  handleSubmit(event) {
    const {
      name, email, message, company,
    } = this.state;

    base('Table 1').create(
      {
        Name: name,
        Email: email,
        Message: message,
        Company: company,
      },
      (err, record) => {
        if (err) {
          this.setState({
            err: true,
          });
          console.error(err);
          return;
        }
        this.setState({
          success: true,
        });
        console.log(record.getId());
      },
    );
    event.preventDefault();
  }

  render() {
    const {
      name, email, message, company, success, err,
    } = this.state;
    return (
      <div className="contact">
        <h2>
          Want Arqade integrated on your <span>🛍 </span> website?
        </h2>

        <div className="contact__block">
          <div className="contact__content">
            <p>
              Want to make your customers shopping experience more fun as well? We can integrate
              Arqade into your website including brand colors and logos. Contact us for more
              information or send us a chat message
            </p>
          </div>
          <form className="contact__form" onSubmit={this.handleSubmit}>
            {err ? <p>Sorry, something went wrong. Please try again!</p> : ''}
            {success
              ? (
                <Fragment>
                  <p>Thank you for your time <span role="img" aria-label="">❤️</span>. We will get back to you ASAP!</p>
                  <img src="https://media.giphy.com/media/XR9Dp54ZC4dji/giphy.gif" alt="gif" />
                </Fragment>
              )
              : (
                <Fragment>
                  <div className="contact__twoRow">
                    <input
                      placeholder="Name"
                      className="input"
                      type="text"
                      value={name}
                      onChange={this.handleName}
                    />
                    <input
                      placeholder="Company"
                      className="input"
                      type="text"
                      value={email}
                      onChange={this.handleEmail}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="E-mail"
                      className="input"
                      type="text"
                      value={company}
                      onChange={this.handleCompany}
                    />
                  </div>
                  <textarea
                    placeholder="Message/question/feedback"
                    className="textarea"
                    type="text"
                    value={message}
                    onChange={this.handleMessage}
                  />
                  <input className="button event-submit-form" type="submit" value="Submit" />
                </Fragment>
              )
            }
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
