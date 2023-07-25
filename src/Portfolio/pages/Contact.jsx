import account from "../data/account.json";
import Gap from "../components/Gap";
import Heading from "../components/Heading";

function Contact() {
  return (
    <div id="contact">
      <Gap />
      <Heading>04. contact me</Heading>
      <Gap />
      <div className="tw-text-xl">You can reach out to me via:</div>
      <Gap />
      <table>
        <tbody>
          <tr>
            <th className="tw-p-2 tw-text-xl">email</th>
            <td className="tw-p-2 tw-text-xl">
              <a
                href={`mailto:${account.email}`}
                className="hover:tw-text-lightSecondary hover:dark:tw-text-darkSecondary"
              >
                {account.email}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Gap />
    </div>
  );
}

export default Contact;
