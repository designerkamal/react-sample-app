import React from "react";
import { NavLink } from "react-router-dom";

export default function NavListItem({ customer, link }) {
  return (
    <NavLink
      to={link}
      activeClassName="bg-yellow-200"
      className="block bg-white shadow-sm py-2 px-4 cursor-pointer hover:bg-yellow-200"
    >
      <p className="text-lg">{customer.name}</p>
      <p className="text-sm text-gray-600">{customer.sex}</p>
      <p className="text-sm text-gray-600">{customer.age} yrs</p>
    </NavLink>
  );
}
