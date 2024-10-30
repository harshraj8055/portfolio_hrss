import ContactAndResumeBtns from "@/components/home/contact-and-resume-btns";
import TypeWriterText from "./type-writer-text";

export default function IntroPanel() {
  return (
    <div className="relative w-full select-none space-y-6 xl:w-1/2 2xl:w-6/12 2xl:space-y-8">
      <h2 className="text-5xl font-bold text-main sm:text-6xl md:text-7xl">
        Harsh Raj
      </h2>
      <TypeWriterText />
      <p className="font-secondary text-base tracking-tight text-primary-foreground sm:text-xl md:text-2xl 2xl:mr-10">
  {/* eslint-disable-next-line react/no-unescaped-entities */}
  I&apos;m an Aspiring Product Manager, studying at the{" "}
  <span className="text-typewriter">
    Indian Institute of Information Technology Guwahati
  </span>{" "}.
  Building innovative and vision-driven products drives me to create
  experiences for people.
</p>
      <ContactAndResumeBtns />

      {/* <LanguagesImageBg /> */}
    </div>
  );
}
