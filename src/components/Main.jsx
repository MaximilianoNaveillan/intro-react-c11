import React from "react";

export default function Main({ children }) {
  console.log(children);
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
