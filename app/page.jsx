'use client'
import React from "react";
import BookList from "../components/BookList";

export default function Page() {
  return (
    <div>
      <div className="font-sans md:font-serif text-2xl">
        <BookList />
      </div>
    </div>
  );
}
