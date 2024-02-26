"use client"
import React from "react";

export default function AddBook() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-5 mt-10">เพิ่มหัวข้อหนังสือ</h1>
      <form className="mx-auto w-1/2">
        <div className="mb-5">
          <input
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="หัวข้อหนังสือ"
          />
        </div>
        <div className="mb-5">
          <input
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="รายละเอียด"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          เพิ่มหัวข้อ
        </button>
      </form>
    </div>
  );
}
