export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 text-white md:px-10 lg:px-20"
    >
      {/* HEADER */}
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            About The Brand
          </p>

          <h2 className="mt-5 text-4xl font-light uppercase leading-[0.95] tracking-tight md:text-6xl">
            Research.
            <br />
            <span className="text-white/40">
              Function.
            </span>
            <br />
            Identity.
          </h2>
        </div>


        <p className="max-w-sm text-sm leading-7 text-white/45">
          Stone Island explores the relationship between material,
          innovation, and contemporary fashion through continuous research.
        </p>

      </div>



      {/* MAIN CONTENT */}
      <div className="grid overflow-hidden border border-white/10 lg:grid-cols-2">


        {/* IMAGE */}
        <div className="relative h-[450px] overflow-hidden md:h-[550px]">

          <img
            src="https://i.pinimg.com/1200x/d5/1b/bb/d51bbb30d58a4b6b864636201a754f67.jpg"
            alt="Stone Island Fashion"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />


          <div className="absolute bottom-8 left-8">

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Material Study
            </p>

            <p className="mt-2 text-sm text-white/80">
              Construction / 01
            </p>

          </div>

        </div>




        {/* TEXT */}
        <div className="flex flex-col justify-between bg-zinc-950 p-8 md:p-10 lg:p-12">


          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Our Philosophy
            </p>


            <h3 className="mt-6 text-2xl font-light leading-tight md:text-3xl">
              Research over decoration.
              <br />

              <span className="text-white/45">
                Function over trend.
              </span>
            </h3>



            <div className="mt-7 space-y-4 text-sm leading-7 text-white/45">

              <p>
                Every garment begins with material exploration.
                Fabrics are tested and developed to create balance
                between performance and identity.
              </p>


              <p>
                Designed with purpose, each piece represents
                innovation, quality, and timeless style.
              </p>

            </div>

          </div>




          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 border-t border-white/10 pt-7">


            <div>
              <p className="text-2xl font-light">
                1982
              </p>

              <span className="text-[9px] uppercase tracking-widest text-white/30">
                Founded
              </span>
            </div>



            <div className="border-l border-white/10 pl-5">

              <p className="text-2xl font-light">
                60+
              </p>

              <span className="text-[9px] uppercase tracking-widest text-white/30">
                Materials
              </span>

            </div>



            <div className="border-l border-white/10 pl-5">

              <p className="text-2xl font-light">
                IT
              </p>

              <span className="text-[9px] uppercase tracking-widest text-white/30">
                Origin
              </span>

            </div>


          </div>


        </div>


      </div>




      {/* BOTTOM STATEMENT */}
      <div className="mt-20 text-center">


        <h3 className="text-xl font-light tracking-tight md:text-3xl">
          Material.
          <span className="text-white/40">
            Function.
          </span>
          Movement.
        </h3>


        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          Driven by innovation and purposeful design,
          every garment reflects a commitment to quality
          and timeless identity.
        </p>


      </div>


    </section>
  );
}