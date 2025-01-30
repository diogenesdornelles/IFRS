import { useParams } from "react-router-dom";
import CardBookFull from "./nested/CardBookFull";

import { TBook } from "../models/models";
import Title from "./nested/Title";
import { useFetch } from "../hooks/useFetch";
import { useMemo } from "react";
import { IRequestOptions } from "../utils/APIService";

const param = {
  h2: "Detalhes",
  sub: "Veja os detalhes do exemplar",
};

/**
 * Renderiza página ver livro completo. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Details(): JSX.Element {
  const { _id } = useParams();
  const options = useMemo(
    () => ({ operation: "GET_BY_ID", _id }),
    [_id]
  );

  const { state } = useFetch<TBook>(options as IRequestOptions)

  return (
    <>
     
        <div className="flex flex-col md:flex-row">
          <Title param={param} />
          <div className="flex w-full justify-center">
            {state && state.data ? <CardBookFull book={state.data} page="details" /> : <p>Livro</p>}
          </div>
        </div>

    </>
  );
}

export default Details;
