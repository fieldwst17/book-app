'use client'
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

export default async function BookList() {
  const removeBtn = async ({id})=> {
    const confirmed = window.confirm('ลบแล้วเอากู้คืนไม่ได้ ต้องการลบหรือไม่ ?')
  
    if(confirmed){
      const res = await fetch (`http://localhost:3000/api/books?id=${id}`,{
        method:"DELETE",
      });
  
      if(res.ok){
        alert('ลบสำเร็จ')
        window.location.reload()
      }
    }
  }
  
  const { books } = await showBook();
  return (
    <div>
      <div className="container-main">
        <h1 className="heading text-5xl font-bold text-center pb-4 mb-4 text-sky-400 drop-shadow-lg">Book List</h1>
        <div className="box-container grid">

          {/* Content */}
          {books.map((item, index) => (
            <div key={index} className="box">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.author}</p>
              <button onClick={()=>removeBtn({id:item._id})}>Delete</button>
              <Link href={'/EditBook/id'}>Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
