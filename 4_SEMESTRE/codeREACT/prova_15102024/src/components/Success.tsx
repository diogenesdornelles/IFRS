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
    <div className="animate__animated animate__fadeIn p-4 mb-4 max-h-12 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
      <span className="font-medium">{param.mMsg}</span> {param.sMsg}
    </div>
  )
}

export default Success