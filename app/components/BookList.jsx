import React from "react";
import Link from "next/link";

export default function BookList() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <Link href={'/AddBook'}>
        <button>Add Book</button>
      </Link>
      <ul className="space-y-2">
        <Link href={"/AddBook"}>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            Think Again
          </li>
        </Link>
        <Link href={"/AddBook"}>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            Atomic Habits
          </li>
        </Link>
        <Link href={"/AddBook"}>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            Emotional First Aid
          </li>
        </Link>
      </ul>
    </div>
  );
}
