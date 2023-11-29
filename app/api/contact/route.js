import connectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/Contact';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(req) {
  const {
    firstname,
    surname,
    gender,
    dob,
    address,
    city,
    archDiocese,
    lga,
    state,
    phoneNumber,
    email,
    salary,
    contribution,
    idupload,
    passupload,
    kinfirstname,
    kinsurname,
    kingender,
    kinaddress,
    kinlga,
    kincity,
    kinstate,
    relationship,
  } = await req.json();

  try {
    await connectDB();
    await Contact.create({
      firstname,
      surname,
      gender,
      dob,
      address,
      city,
      archDiocese,
      lga,
      state,
      phoneNumber,
      email,
      salary,
      contribution,
      idupload,
      passupload,
      kinfirstname,
      kinsurname,
      kingender,
      kinaddress,
      kinlga,
      kincity,
      kinstate,
      relationship,
    });

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ['Unable to send message.'] });
    }
  }
}
