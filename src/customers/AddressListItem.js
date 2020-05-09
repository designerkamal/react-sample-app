import React from "react";

function AddressListItem({ address }) {
  return (
    <div className="p-4 bg-white shadow-sm text-sm">
      <h5 className="text-black pb-2">{address.title}</h5>
      <p>
        {address.street}
        <br />
        {address.city}
        <br />
        {address.state} - {address.zipCode}
        <br />
        {address.country}
      </p>
    </div>
  );
}

export default AddressListItem;
