import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface IState {
  status: string;
  loading: boolean;
  messageLength: number;
}

interface IProp {
  display: () => void;
}

export function Success(props: IProp) {
  return (
    <div className="p-6 border rounded-lg text-center bg-green-50">
      <h1 className="text-green-600 text-4xl mb-2">✔</h1>
      <h2 className="text-xl font-semibold">Your message has been sent</h2>
      <p className="text-gray-600 mt-2">
        Thanks for reaching out to Kponkius. I’ll reply as soon as possible — usually within 24 hours.
      </p>
      <div className="mt-4">
        <button
          onClick={props.display}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        >
          Thank you, Kponkius Client
        </button>
      </div>
    </div>
  );
}

export default class MyForm extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      loading: false,
      messageLength: 0,
    };
  }

  submitForm(e: any) {
    e.preventDefault();
    this.setState({ loading: true });
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      this.setState({ loading: false });
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS", messageLength: 0 });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  setStatus = () => {
    this.setState({ status: "" });
  };

  handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ messageLength: e.target.value.length });
  };

  render() {
    const { status, loading, messageLength } = this.state;
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="https://formspree.io/f/xzzaodke"
          onSubmit={this.submitForm}
          className="grid gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />

          {/* Subject Dropdown */}
          <select
            name="subject"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Subject*</option>
            <option value="Project Inquiry">Project Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="General Question">General Question</option>
          </select>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="timeline"
              placeholder="Expected Timeline"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message with counter */}
          <div>
            <textarea
              name="message"
              rows={4}
              minLength={10}
              placeholder="Your Message*"
              required
              onChange={this.handleMessageChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              {messageLength}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white font-medium shadow hover:bg-purple-700"
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 text-center mt-2">
            🔒 Your information is safe with me. I’ll only use it to respond to your inquiry.
          </p>
        </form>

        {/* Status Messages */}
        {status === "SUCCESS" && <Success display={this.setStatus} />}
        {status === "ERROR" && (
          <p className="mt-4 text-center text-red-500 font-medium">
            Ooops! There was an error.
          </p>
        )}

       
      </div>
    );
  }
}
