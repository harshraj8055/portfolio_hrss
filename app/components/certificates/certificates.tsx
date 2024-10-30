'use client'
import CERTIFICATES from "@/lib/data/certificates";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <div className="projects py-2">
      <div className="flex flex-wrap justify-center gap-11">
        {CERTIFICATES.map(({ imageUrl, link }, index) => (
          <motion.div
          key={index}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
          ><a href={link}>
              <Image src={imageUrl} alt={imageUrl} width={550} height={850}/>
          </a>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}
{
  /* <iframe src="" width={"100%"} height={"100%"} />; */
}
