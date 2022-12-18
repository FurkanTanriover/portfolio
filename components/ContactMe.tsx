import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:furkan.tanrioveer@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-col max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" top-16 md:top-6 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col space-y-4 pt-14">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. <span className="underline decoration-[#F7AB0A]/50">Lets talk.</span>
        </h4>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="h-5 w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-lg">+90 555 555 55 55</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="h-5 w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-lg">furkan.tanrioveer@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="h-5 w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-lg">123 Developer Lane</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
        <div className="flex space-x-5">
          <input {...register("name")} className="contact-input" type={"text"} placeholder={"Name"} />
          <input {...register("email")} className="contact-input" type={"text"} placeholder={"Email"} />
        </div>
        <input {...register("subject")} className="contact-input" type={"text"} placeholder={"Subject"} />
        <input {...register("message")} className="contact-input" type={"text"} placeholder={"Message"} />
        <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
