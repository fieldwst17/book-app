import React from "react";
import BookList from "../components/BookList";

export default function Page() {
  return (
    <div>
      <div className="text-2xl text-center text-red-600 vh">
        <BookList />
      </div>
    </div>
  );
}
