import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactImage from "./ContactImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
