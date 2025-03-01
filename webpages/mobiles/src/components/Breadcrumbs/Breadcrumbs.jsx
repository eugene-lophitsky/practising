import React from "react";
import links from "../Breadcrumbs/links.js";
import references from "../Breadcrumbs/breadcrumbs.module.css";

function LinksArray(props) {
  const { items } = props;
  return (
    <>
      <a href="#!">{`${items.name}`}</a>
      <span className={references.separator}>{">"}</span>
    </>
  );
}

export default function Breadcrumbs() {
  return (
    <nav className={references.breadcrumbs}>
      {links.map((items) => (
        <LinksArray items={items} key={items.id} />
      ))}
    </nav>
  );
}

