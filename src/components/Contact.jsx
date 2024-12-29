import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Title */}
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

      {/* Contact Information */}
      <div className="text-center tracking-tighter">
        {/* Address */}
        <a 
          target="_blank" 
          href="https://www.google.com/maps/place/Bak%C4%B1/@40.394737,49.6901475,11z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        >
          <p className="my-4">{CONTACT.address}</p>
        </a>

        {/* Phone Number */}
        <p className="my-4">{CONTACT.phoneNo}</p>

        {/* Email */}
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
