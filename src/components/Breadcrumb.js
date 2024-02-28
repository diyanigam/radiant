import React from 'react';
import "./Breadcrumb.css"

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/host">Hosting</a></li>
        <li><a href="/host">Hosting for all</a></li>
        <li><a href="/host">Hosting 6</a></li>
        <li><a href="/host">Hosting 5</a></li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
