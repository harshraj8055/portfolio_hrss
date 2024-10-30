export default function AboutExp() {
  return (
    <div className="flex w-full select-none justify-between uppercase sm:justify-center sm:gap-20">
      <div className="flex gap-2">
        <p className="text-5xl font-bold text-main sm:text-6xl xl:text-7xl">
          01+
        </p>
        <div className="flex flex-col items-center justify-center text-base leading-5 tracking-tighter sm:text-xl sm:leading-6 xl:text-2xl xl:leading-7">
          <span className="text-primary-foreground">Years Of</span>
          <span className="tracking-wide text-primary-foreground">Product development</span>
        </div>
      </div>

      <div className="flex gap-2">
        <p className="text-5xl font-bold text-main sm:text-6xl xl:text-7xl">
          10+
        </p>
        <div className="flex flex-col items-center justify-center text-base leading-5 tracking-tighter sm:text-xl sm:leading-6 xl:text-2xl xl:leading-7">
          <span className="text-primary-foreground">Completed</span>
          <span className="tracking-wide text-primary-foreground">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
}
