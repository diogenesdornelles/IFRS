import { useParams } from "react-router-dom";
import CardBookFull from "./nested/CardBookFull";
import Title from "./nested/Title";
import { TBook } from "../models/models";
import { useFetch } from "../hooks/useFetch";
import { useMemo } from "react";
import { IRequestOptions } from "../utils/APIService";

const param = {
  h2: "Deletar",
  sub: "Deletar informações sobre o livro selecionado",
};

/**
 * Renderiza página deletar livro. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Delete(): JSX.Element {
  const { _id } = useParams();
  const options = useMemo(() => ({ operation: "GET_BY_ID", _id }), [_id]);

  const { state } = useFetch<TBook>(options as IRequestOptions);

  return (
    <>
      {state && state.data ? (
        <div className="flex flex-col md:flex-row  mt-5 mb-6">
          <Title param={param} />
          <div className="flex justify-center w-full">
            <CardBookFull book={state.data} page="delete" />
          </div>
        </div>
      ) : (
        <p className="p-4 backdrop-blur-sm bg-black/50 rounded-lg mt-6 ml-6 w-fit h-fit">
          Nenhum livro selecionado para deletar
        </p>
      )}
    </>
  );
}

export default Delete;
