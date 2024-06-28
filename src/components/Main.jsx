import React from "react";

export default function Main({ children }) {
  console.log(children);
  return (
    <main class="mymain">
      <article>{children}</article>
    </main>
  );
}
