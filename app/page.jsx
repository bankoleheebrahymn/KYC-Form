import PersonalForm from "./components/PersonalForm";


export default function Home() {
  return (
    <div className="bg-slate-100 mx-auto p-12 max-w-3xl mt-10 rounded">
      <h1 className="font-bold text-[20px] py-4 font-roboto ">PERSONAL DETAILS FORM</h1>
      <p className="font-roboto text-[18px] font-light ">Please fill the form below</p>
       
      <PersonalForm />
    </div>
  )
}
