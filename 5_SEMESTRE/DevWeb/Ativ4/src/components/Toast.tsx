import { Toast as Toast_ } from "../styles/Toast";


function Toast({message}: {message: string}): React.ReactElement {

  return (
    <Toast_>
        {message}
    </Toast_>
  );
}

export default Toast;