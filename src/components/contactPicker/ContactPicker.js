import React from "react";

export const ContactPicker = ({ contacts, setContact, value, name }) => {

  return (
    <div>
      <select onChange={setContact} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {contacts?.map((contact) => (
          <option key={contact.name} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
