"use client"

import { useState } from "react";
import axios from 'axios';


const PersonalForm = () => {
  const [userData, setUserData] = useState({
    firstname: '', surname: '', gender: '', dob: '', address: '', city: '', archDiocese: '',
    lga: '', state: '', phoneNumber: '', email: '', salary: '', contribution: '', idupload: '',
    passupload: '', kinfirstname: '', kinsurname: '', kingender: '', kincity: '', kinaddress: '',
    kinlga: '', kinstate: '', relationship: '', archDiocese: ''
  })
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const preset_key = 'rntzwu1t';
  const cloud_name = 'djncfepvg';

  const handleInputChange = (e) => {
    e.preventDefault();
    setUserData(prev => ({...prev, [e.target.id]: e.target.value}));
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("api/contact", userData)
       setError(res.data.msg);
       setSuccess(res.data.success);
     }

    const handleFileInputChange = (event) => {
      const file = event.target.files[0]
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', preset_key);
      axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then(res => setUserData(prev => ({...prev, idupload: res.data?.url, passupload: res.data?.url})))
      .catch(err => console.log(err))

    };

    console.log(userData.idupload)
  
  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t border-black flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  ">
        <div className="sm:col-span-3 ">
        <label htmlFor="firstname">Firstname</label>
                  <input  className=""onChange={handleInputChange} value={userData.firstname} type="text" id="firstname" placeholder="John" />
            </div>

        <div className="sm:col-span-3 ">
        <label htmlFor="surname">Surname</label>
        <input className=""onChange={handleInputChange} value={userData.surname} type="text" id="surname" placeholder="Doe" />
        </div>
        </div>

        <div>
        <label htmlFor="gender">Gender</label>
        <input onChange={handleInputChange} value={userData.gender} type="text" id="gender" placeholder="Male or Female" />
        </div>

        <div>
        <label htmlFor="dob">Date of Birth</label>
        <input onChange={handleInputChange} value={userData.dob} type="date" id="dob" />
        </div>

        <div>
        <label htmlFor="city">City</label>
        <input onChange={handleInputChange} value={userData.city}  type="text" id="city" placeholder="Please enter your city..." />
        </div>

        <div>
        <label htmlFor="address">Address</label>
        <input onChange={handleInputChange} value={userData.address} type="text" id="address" placeholder="Enter your address.." />
        </div>

        <div>
        <label htmlFor="archDiocese">Arch-Diocese</label>
        <input onChange={handleInputChange} value={userData.archDiocese} type="text" id="archDiocese" placeholder="Please enter diocese..." />
        </div>

        <div>
        <label htmlFor="lga">Local Government Area</label>
        <input onChange={handleInputChange} value={userData.lga} type="text" id="lga" placeholder="Please enter your lga" />
        </div>

        <div>
        <label htmlFor="state">State</label>
        <input onChange={handleInputChange} value={userData.state} type="text" id="state" placeholder="Please enter your state" />
        </div>

        <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input onChange={handleInputChange} value={userData.phoneNumber} type="text" id="phoneNumber" placeholder="Please enter your phone number" />
        </div>

        <div>
        <label htmlFor="email">Email Address</label>
        <input onChange={handleInputChange} value={userData.email} type="text" id="email" placeholder="john@example.com" />
        </div>

        <div>
        <label htmlFor="salary">Monthly Salary</label>
        <input onChange={handleInputChange} value={userData.salary} type="text" id="salary" placeholder="Please enter your monthly salary" />
        </div>

        <div>
        <label htmlFor="contribution">Monthly Contribution</label>
        <input onChange={handleInputChange} value={userData.contribution} type="text" id="contribution" placeholder="Please enter your monthly contribution" />
        </div>

        <div>
          <label htmlFor="idupload">Government ID Upload</label>
        <input className="border-transparent" onChange={handleFileInputChange} defaultValue={userData.idupload} type="file" id="idupload" placeholder="Please upoad your govt ID card" />
        </div>

        <div>
        <label htmlFor="passupload">Passport ID Upload</label>
        <input className="border-transparent" onChange={handleFileInputChange} defaultValue={userData.passupload} type="file" id="passupload" placeholder="Please upoad your passport ID card" />
        </div>

              

 {/* Next of Kin start here */}

        <h1 className="font-bold text-[20px] py-4 font-roboto">NEXT OF KIN</h1>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
        <div className="sm:col-span-3 ">
        <label htmlFor="kinfirstname">Firstname</label>
        <input onChange={handleInputChange} value={userData.kinfirstname} type="text" id="kinfirstname" placeholder="John" />
        </div>

        <div className="sm:col-span-3 "> 
        <label htmlFor="kinsurname">Surname</label>
        <input onChange={handleInputChange} value={userData.kinsurname} type="text" id="kinsurname" placeholder="Doe" />
        </div>
        </div>

        <div>
        <label htmlFor="kingender">Gender</label>
        <input onChange={handleInputChange} value={userData.kingender}  type="text" id="kingender" placeholder="Male or Female" />
        </div>

        <div>
        <label htmlFor="kinaddress">Address</label>
        <input onChange={handleInputChange} value={userData.kinaddress} type="text" id="kinaddress" placeholder="Enter your address.." />
        </div>

        <div>
        <label htmlFor="kincity">City</label>
        <input onChange={handleInputChange} value={userData.kincity}  type="text" id="kincity" placeholder="Please enter your city..." />
        </div>

        <div>
        <label htmlFor="kinlga">Local Government Area</label>
        <input onChange={handleInputChange} value={userData.kinlga} type="text" id="kinlga" placeholder="Please enter your lga" />
        </div>

        <div>
        <label htmlFor="kinstate">State</label>
        <input onChange={handleInputChange} value={userData.kinstate} type="text" id="kinstate" placeholder="Please enter your state" />
        </div>

        <div>
        <label htmlFor="relationship">Relationship</label>
        <input onChange={handleInputChange} value={userData.relationship} type="text" id="relationship"  />
        </div>

        
        <button className="bg-green-700 rounded py-2 text-white"
         type="submit">Send</button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div className = {`${success ? "text-green-700" : "text-red-600"
              } px-5 py-2`}>
                {e}
                </div>
          ))}
      </div>
    </>
  )
}

  

export default PersonalForm;