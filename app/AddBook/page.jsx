"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [successMessage, setSuccessMessage] = useState("บันทึกข้อมูลเรียบร้อย");

  const router = useRouter();

  const handleSubmit = async (e) => {
    const confirmed = window.confirm("ต้องการบันทึกข้อมูลหรือไม่");
    e.preventDefault();
    if (!title || !description || !author) {
      alert("กรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (confirmed) {
      try {
        const res = await fetch("http://localhost:3000/api/books", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, author }),
        });

        if (res.ok) {
          alert(`${successMessage}`);
          router.push("/");
          router.refresh();
        } else {
          throw new Error("Failed to Create")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-5 mt-10 text-sky-400">เพิ่มหัวข้อหนังสือ</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-full sm:w-1/2">
        <div className="mb-5">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="หัวข้อหนังสือ"
          />
        </div>
        <div className="mb-5">
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="รายละเอียด"
          />
        </div>
        <div className="mb-5">
          <input
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="ชื่อผู้เขียน"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          เพิ่มหัวข้อ
        </button>
      </form>
    </div>
  );
  }
