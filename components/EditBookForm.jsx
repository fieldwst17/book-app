"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBookForm({ id, title, description, author }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newAuthor, setNewAuthor] = useState(author);

  const router = useRouter();

  const handleSubmit = async (e) => {
    const confirmed = window.confirm("ต้องการอัปเดตข้อมูลหรือไม่");
    e.preventDefault();
    if (!title || !description || !author) {
      alert("กรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription, newAuthor }),
        });

        if (!res.ok) {
          throw new Error("Faild to updated");
        }
        alert("อัปเดตสำเร็จ");
        router.push("/");
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-5 mt-16 text-sky-400">อัปเดตหัวข้อหนังสือ</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-full sm:w-1/2">
        <div className="mb-5">
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="หัวข้อหนังสือ"
          />
        </div>
        <div className="mb-5">
          <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="รายละเอียด"
          />
        </div>
        <div className="mb-5">
          <input
            onChange={(e) => setNewAuthor(e.target.value)}
            value={newAuthor}
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="ชื่อผู้เขียน"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          อัปเดตหัวข้อ
        </button>
      </form>
    </div>
  );
  }
