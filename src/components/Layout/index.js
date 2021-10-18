import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/crypto">ارز دیجیتال</Link>
          </li>
          <li>
            <Link href="/mobile">موبایل</Link>
          </li>
          <li>
            <Link href="/robot">رباتیک</Link>
          </li>
          <li>
            <Link href="/space">فضانوردی</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer style={{ backgroundColor: "#000", color: "#fff", height: 200 }}>
        footer
      </footer>
    </div>
  );
}
