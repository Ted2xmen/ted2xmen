import { useRef } from "react";

type cardProps = {
  children: React.ReactNode;
};

export default ({ children }: cardProps) => {
  const shadowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { top, left } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      if (shadowRef.current) {
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.top = `${y}px`;
        shadowRef.current.style.transform = "translate(-50%, -50%)";
        (
          cardRef.current as any
        ).style = `--cursor-x: ${x}px; --cursor-y: ${y}px`;
      }
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={cardRef}
      className={`relative group/seeAll transition duration-200 delay-500 bg-slate-900/30 w-full p-5 z-0 group overflow-hidden border rounded-lg shadow shadow-primary/30 border-main/20`}>
      <div className={`z-10 relative space-y-5`}>{children}</div>
      <div
        ref={shadowRef}
        className="bg-[linear-gradient(180deg,_#665f51_0%,_rgba(59,_130,_146,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[90px] opacity-0 absolute top-0 left-0 w-2/5 h-2/5 duration-150 group-hover:opacity-90"></div>
    </div>
  );
};
