import React, { Component } from 'react';
import Airtable from 'airtable';

import './styles.scss';

const base = new Airtable({ apiKey: 'keynj1B4ygPySCcy6' }).base('appFSzlqSvMpryzY5');

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', success: false, err: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const { email } = this.state;

    base('Table 1').create(
      {
        Email: email,
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
    const { email, success, err } = this.state;
    return (
      <div className="contact">
        <h2>Contact title</h2>
        <p>Contact paragraph</p>

        <form className="contact__form" onSubmit={this.handleSubmit}>
          <input type="text" value={email} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {success ? 'succes' : ''}
        {err ? 'Error' : ''}
      </div>
    );
  }
}

export default Contact;
