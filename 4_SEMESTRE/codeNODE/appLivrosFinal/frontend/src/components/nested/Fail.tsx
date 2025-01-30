interface FailProps {
  param: {
    mMsg: string;
    sMsg: string;
  }
}

/**
 * Renderiza info de fail em uma requisiçao
 *
 * @param {FailProps} { param }
 * @return {*}  {JSX.Element}
 */
function Fail({ param }: FailProps): JSX.Element {

  return (
    <div className="animate__animated animate__fadeIn p-8 text-xl text-red-800 rounded-lg bg-red-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9999]" role="alert">
      <span className="font-medium">{param.mMsg}!</span> {param.sMsg}
    </div>
  )
}

export default Fail