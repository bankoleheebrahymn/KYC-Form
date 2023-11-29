import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstame is required."],
    trim: true,

  },

  surname: {
    type: String,
    required: [true, "Surname is required."],
    trim: true,
    
  },

  gender: {
    type: String,
    required: [true, "Gender is Required."],
    trim: true,
    
  },

  dob: {
    type: Date,
     },

     address: {
        type: String,
        required: [true, "Address is Required."],
        trim: true,
    },

    city: {
        type: String,
        required: [true, "Gender is Required."],
        trim: true,
    },

    archDiocese: {
        type: String,
        required: [true, "Gender is Required."],
        trim: true,
    },

    lga: {
        type: String,
        required: [true, "LGA is Required."],
        trim: true,
    },

    state: {
        type: String,
        required: [true, "State is Required."],
        trim: true,
    },

    phoneNumber: {
        type: String,
        required: [true, "Phone number is Required."],
    },


  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  salary: {
    type: String,
    required: [true, "Salary is Required."],
    trim: true,
},

contribution: {
    type: String,
    required: [true, "Contribution is Required."],
    trim: true,
},

idupload: {
    type: String,
    required: [true, "File  is required."],
    trim: true,
  },

  passupload: {
    type: String,
    required: [true, "File  is required."],
    trim: true,
  },

  kinfirstname: {
    type: String,
    required: [true, "Kin firstname is Required."],
    trim: true,
},

kinsurname: {
    type: String,
    required: [true, "Kin surname is Required."],
    trim: true,
},

kingender: {
    type: String,
    required: [true, "Kin gender is Required."],
    trim: true,
},

kinaddress: {
    type: String,
    required: [true, "Kin address is Required."],
},

kincity: {
    type: String,
    required: [true, "Kin city is Required."],
    trim: true,
},

kinstate: {
    type: String,
    required: [true, "Kin state is Required."],
    trim: true,
},

relationship: {
    type: String,
    required: [true, "Kin state is Required."],
    
},

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =  mongoose.model("Contact", contactSchema);

export default Contact;