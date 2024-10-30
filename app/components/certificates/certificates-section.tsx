import CERTIFICATES from "@/lib/data/certificates";
import SectionHeading from "../ui/section-heading";
import Certificates from "./certificates";


export default function CertificateSection() {
  return (
    <section id="projects">
      <div className="flex flex-col space-y-6 py-8 2xl:px-24">
        <div>
          <SectionHeading text="Certificates" />
        </div>

        {/* all projects container  */}
        
        <Certificates />
      </div>
    </section>
  );
}
