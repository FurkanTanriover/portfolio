/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-6  uppercase tracking-[20px] text-gray-500 text-2xl ">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQEKqLYh8XhVMg/profile-displayphoto-shrink_800_800/0/1623004462527?e=1675296000&v=beta&t=Pu_zmE7DqzclJoaoD1xzs0sXlAIwWz8lN_gpL2EBbVQ"
        className="-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] pb-2"
      />
      <div className="space-y-5 px-0 md:px-10">
      <div className=" h-5 t-10"></div>
        <h4 className="text-4xl font-semibold -mb-4">
          Hakkımda <span className="underline decoration-[#f7ab0a]/50">küçük</span> bir özet
        </h4>
        <p className="text-base">
          Ben Furkan, 1999 yılında İstanbul'da doğdum. 2021 yılında Marmara Üniversitesi Bilgisayar Programlama bölümünden mezun oldum.
          Ardından Anadolu Üniversitesi Yönetim Bilişim Sistemlerine kayıt oldum. 2022 yılı haziran ayına kadar kendimi çeşitli eğitimlerle
          geliştirdim, oyun geliştirme(unity, c#), mobil programlama(flutter, react native, dart, js) ve web(react, js). 2022 haziranda bir
          firmada yazılım mühendisi olarak çalışmaya başladım. Burada (react, nextjs, hasura, firebase, react native) teknolojilerini
          kullanarak geliştirmeler yaptım. Yazılım hayatım hakkında minik bir girişin sonrasında biraz hobilerimden bahsetmek isterim 🙂.
          Boş zamanlarımı spor(futbol, fitness), dans(salsa, bachata), yazılım çalışmak, kitap okumak ve müzik dinlemek gibi aktivitelerle geçiriyorum.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
