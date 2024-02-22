import React from "react";
import BookList from "./components/BookList";

export default function Page() {
  return (
    <>
      <div className="text-2xl text-center text-red-600 ">
        <BookList />
      </div>
    </>
  );
}
