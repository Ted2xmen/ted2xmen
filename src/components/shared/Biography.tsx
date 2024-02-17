const Biography = ({ image, info }: any) => {
  return (
    <section className="flex flex-col mx-auto md:flex-row text-center md:text-left items-center gap-6">
      <img
        src={image}
        alt="me"
        width="105"
        height="125"
        className="rounded-lg"
      />
      <div className="bg-gradient-to-r from-main/70 to-main/90 bg-clip-text text-transparent text-sm md:text-base">
        {info}
      </div>
    </section>
  );
};

export default Biography;
