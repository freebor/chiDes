const ContactInfo = () => {
  return (
    <section className="flex gap-8">
      <div>
        <p>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</p>
        <div>
          <input
            type="text"
            className="border border-gray-300 text-[#6E7191] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 text-[#6E7191] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="border border-gray-300 text-[#6E7191] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
          />
          <input
            type="text"
            className="border border-gray-300 text-[#6E7191] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message"
          ></textarea>
        </div>
        <div>
          <button className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>
    </section>
  );
};
export default ContactInfo;
