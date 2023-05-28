import account from "../data/account.json";

function Contact() {
  return (
    <div id="Contact">
      <h2>Contact</h2>
      <a href={`mailto:${account.email}`}>{account.email}</a>
    </div>
  );
}

export default Contact;
