import react from "react";
import ContactContent from "../components/Contact/ContactContent";
import BreadCrump from "../components/BreadCrump/BreadCrump";

const ContactPage = () => {
  return (
    <div>
      
      <ContactContent
        phone="+90 545 922 9222"
        email="test@gmail.com"
        address="Great Street, 4671 Camp Road, Eagle/Istanbul"
      />
    </div>
  );
};

export default ContactPage;
