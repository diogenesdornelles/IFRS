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
    <div className="animate__animated animate__fadeIn p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
      <span className="font-medium">{param.mMsg}</span> {param.sMsg}
    </div>
  )
}

export default Fail