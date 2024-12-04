const About = () => {
  return (
    <div className="py-20">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-4xl font-bold tracking-widest text-primary-content">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        totam dolores officia corporis vel. Mollitia quae nulla magni nostrum
        pariatur optio quidem quibusdam? Quasi cum veniam, minima corrupti
        eveniet, ullam quia vitae assumenda cupiditate, corporis nihil velit
        rerum neque officiis.
      </p>
    </div>
  );
};

export default About;
