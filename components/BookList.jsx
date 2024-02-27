"use client";
import React from "react";
import Link from "next/link";

const showBook = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/books", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch book");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
  }
};

const removeBtn = async ({ id }) => {
  const confirmed = window.confirm("ลบแล้วเอากู้คืนไม่ได้ ต้องการลบหรือไม่ ?");

  if (confirmed) {
    const res = await fetch(`http://localhost:3000/api/books?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("ลบสำเร็จ");
      window.location.reload();
    }
  }
};

export default async function BookList() {
  const { books } = await showBook();
  return (
    <div>
      <div className="container-main">
        <h1 className="heading text-5xl font-bold text-center pb-4 mb-4 mt-16 text-sky-400 drop-shadow-lg">
          Book List
        </h1>
        <div>
          {/* Content */}
          {books.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-slate-300 my-3 rounded-md flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2">ชื่อหนังสือ : {item.title}</h3>
              <p className="text-gray-600 mb-2">รายละเอียด : {item.description}</p>
              <p className="text-gray-600 mb-2">ชื่อผู้เขียน : {item.author}</p>
              <p className="text-gray-600 mb-2">สร้างเมื่อ : {new Date(item.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-2">อัปเดตหัวข้อล่าสุด : {new Date(item.updatedAt).toLocaleDateString()}</p>
              <div className="flex justify-between mt-auto">
                <button
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
                  onClick={() => removeBtn({ id: item._id })}
                >
                  Delete
                </button>
                <Link
                  href={`/EditBook/${item._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
