interface ITitleProps {
  param: {
    h2: string;
    sub: string;
  };
}

/**
 * Renderiza um título, para cada página
 *
 * @param {ITitleProps} { param }
 * @return {*}  {JSX.Element}
 */
function Title({ param }: ITitleProps): JSX.Element {
  return (
    <>
      <div className="p-4 backdrop-blur-sm bg-black/50 rounded-lg ml-6 w-fit h-fit mt-20">
        <h2
          className="text-white text-4xl font-extrabold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          {param.h2}
        </h2>
        <p
          className="text-md text-white p-2 min-w-[300px]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          {param.sub}
        </p>
      </div>
    </>
  );
}
export default Title;
