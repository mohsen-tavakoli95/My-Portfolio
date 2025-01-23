//components
import Form from "./Form";
import { RenderBackgroudImage } from "@/components";

export default function About() {
  return (
    <>
      <RenderBackgroudImage />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Have questions or want to discuss a project? Feel free to get in touch! Provide your name, email, and message, and I’ll get back to you promptly. I look forward to hearing from you.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
