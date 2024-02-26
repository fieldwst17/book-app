import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Book from "../../../models/books";

// Create
export async function POST(data) {
    await connectMongoDB();
    const {title,description,author} = await data.json();
    await Book.create({title,description,author});
    return NextResponse.json({message: 'Book Created'}, {status:201});
}

// Read
export async function GET(){
    await connectMongoDB();
    const books = await Book.find();
    return NextResponse.json({books})
}

// Delete
export async function DELETE(deleteData){
    await connectMongoDB()
    const id = deleteData.nextUrl.searchParams.get('id')
    await Book.findByIdAndDelete(id)
    return NextResponse.json({message:'Book Deleted'},{status:200})
}







