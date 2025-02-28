import twCss from "../assets/tw/tw";


interface TitleProps {
  param: {
    h2: string;
    sub: string;
  }
}

/**
 * Renderiza um título, para cada página
 *
 * @param {TitleProps} { param }
 * @return {*}  {JSX.Element}
 */
function Title({ param }: TitleProps): JSX.Element {
  return (
    <>
      <div className="p-4 backdrop-blur-sm bg-black/30 rounded-lg">
        <h2 className={twCss.h2} style={{ textShadow: twCss.textShadow }}>{param.h2}</h2>
        <p className={twCss.sub} style={{ textShadow: twCss.textShadow }}>{param.sub}</p>
      </div>
    </>
  );
}
export default Title;