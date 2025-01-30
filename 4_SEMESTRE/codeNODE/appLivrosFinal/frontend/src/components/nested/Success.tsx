interface SuccessProps {
  param: {
    mMsg: string;
    sMsg: string;
  }
}

/**
 * Renderiza uma informação de sucesso
 *
 * @param {SuccessProps} { param }
 * @return {*}  {JSX.Element}
 */
function Success({ param }: SuccessProps): JSX.Element {

  return (
    <div className="animate__animated animate__fadeIn p-4 text-xl text-green-50 rounded-lg bg-green-800 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9999]" role="alert">
      <span className="font-medium">{param.mMsg}!</span> {param.sMsg}
    </div>
  )
}

export default Success