import Book from "../../../../models/books";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";

// Update
export async function PUT(update,{params}) {
    await connectMongoDB();
    const {id} = params;
    const {newTitle: title, newDescription: description, newAuthor: author} = await update.json();
    await Book.findByIdAndUpdate(id,{title,description,author})
    return NextResponse.json({message:'Book Updated'},{status:202})
}

// Read One
export async function GET(remove ,{params}){
    await connectMongoDB();
    const {id} = params;
    const book = await Book.findOne({_id:id})
    return NextResponse.json({book},{status:200})
}


