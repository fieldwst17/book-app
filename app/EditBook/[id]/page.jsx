import EditBookForm from "../../../components/EditBookForm";

const updateBookById = async (id) => {
  // const updateBookById = async (id) => { ... }: 
  // ฟังก์ชัน updateBookById ทำหน้าที่ส่งคำขอไปยัง API 
  // เพื่อดึงข้อมูลหนังสือที่ต้องการแก้ไขโดยใช้ id ของหนังสือเป็นพารามิเตอร์
  try {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch book");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBook({ params }) {
  // export default async function EditBook({ params }) { ... }: 
  // ฟังก์ชันหลักของหน้า EditBook ที่เป็น default export และใช้ async function ซึ่งรับพารามิเตอร์ { params } เพื่อรับ id ของหนังสือที่ต้องการแก้ไข
  const { id } = params; //const { id } = params;: ดึงค่า id จากพารามิเตอร์ params.
  const { book } = await updateBookById(id); //const { book } = await updateBookById(id);: เรียกใช้ฟังก์ชัน updateBookById เพื่อดึงข้อมูลหนังสือที่ต้องการแก้ไขโดยใช้ id ที่ได้มา และนำผลลัพธ์ที่ได้ไปเก็บในตัวแปร book
  const { title, description, author } = book; //const { title, description, author } = book;: ดึงข้อมูล title, description, และ author จาก book
  return (
    //  แสดงคอมโพเนนต์ EditBookForm และส่งข้อมูล id, title, description, และ author ไปยังคอมโพเนนต์นั้นเพื่อแสดงแบบฟอร์มสำหรับแก้ไขข้อมูลหนังสือ.
    <EditBookForm
      id={id} title={title} description={description} author={author}
    />
  );
}
