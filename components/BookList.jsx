import React from "react";
import Link from "next/link";

export default function BookList() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <div className="flex flex-wrap justify-between">
        <table className="w-full text-sm">
          <tbody>
            <tr className="grid grid-cols-5 gap-4">
              <td>
                <Link href={"/AddBook"}>
                  <div className="p-4 bg-white border rounded-lg shadow-md">
                    <p className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                      Think Again
                    </p>
                    <p className="text-gray-500">By Adam Grant</p>
                    <p className="text-gray-500">Published: January 12, 2021</p>
                  </div>
                </Link>
              </td>
              <td>
                <Link href={"/AddBook"}>
                  <div className="p-4 bg-white border rounded-lg shadow-md">
                    <p className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                      Atomic Habits
                    </p>
                    <p className="text-gray-500">By James Clear</p>
                    <p className="text-gray-500">Published: October 16, 2018</p>
                  </div>
                </Link>
              </td>
              <td>
                <Link href={"/AddBook"}>
                  <div className="p-4 bg-white border rounded-lg shadow-md">
                    <p className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                      Emotional First Aid
                    </p>
                    <p className="text-gray-500">By Guy Winch</p>
                    <p className="text-gray-500">Published: July 10, 2014</p>
                  </div>
                </Link>
              </td>
              <td>
                <Link href={"/AddBook"}>
                  <div className="p-4 bg-white border rounded-lg shadow-md">
                    <p className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                      Four Thousand Week
                    </p>
                    <p className="text-gray-500">By Oliver Burkeman</p>
                    <p className="text-gray-500">Published: June 29, 2021</p>
                  </div>
                </Link>
              </td>
              <td>
                <Link href={"/AddBook"}>
                  <div className="p-4 bg-white border rounded-lg shadow-md">
                    <p className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                      INTO THE MAGIC SHOP
                    </p>
                    <p className="text-gray-500">By James R. Doty</p>
                    <p className="text-gray-500">Published: May 5, 2016</p>
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
