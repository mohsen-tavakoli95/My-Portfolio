//images
import Image from "next/image";
import backgroundImage from "../../../../public/background/contact-background.png";
//components
import Form from "./Form";

export default function About() {
  return (
    <>
      <Image src={backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25 -z-50" />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Contact me
        </h1>
        <p className="text-center font-light">
          Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription
          Description
          Description
          Description
          Description

        </p>
        </div>
        <Form />
      </article>
    </>
  );
}
