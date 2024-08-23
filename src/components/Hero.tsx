function Hero() {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-between">
      <h2 className="text-5xl font-extrabold text-orange-500 tracking-wide underline">
        PSDC
      </h2>

      <h3 className="text-3xl font-extrabold  text-orange-500 tracking-tight underline mt-2">
        Professional Software Development Course 2.0
      </h3>
      <p className="text-base mt-6 italic tracking-tight">
        &quot;A nation-building program designed to empower students with the latest 
        <span className="text-orange-500 font-bold text-lg underline"> cutting-edge</span> technology, fostering innovation and creativity. Our
        mission is to equip the <span className="text-orange-500 font-bold text-lg underline">Next Generation</span> with the skills and knowledge
        necessary to thrive in a rapidly evolving digital landscape. By
        providing hands-on experience with emerging technologies, we aim to
        bridge the gap between education and industry, preparing students to
        become leaders in the tech-driven world of tomorrow.&quot;
      </p>
    </div>
  );
}

export default Hero;
