import { useState } from "react";
import { Context } from "../components/Context/Context";

export const CadastroProduto = () => {
    const [nomeProduto, setNomeProduto] = useState("");
    const [quantidade, setquantidade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [caracteristicas, setcaracteristicas] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sucess = await CadastroProduto(nomeProduto, quantidade, descricao, caracteristicas);
    if (sucess) {
        alert("Produto cadastrado com sucesso!");
    } else {
        alert("Erro ao cadastrar produto. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-scree px-4 text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Cadastro de produtos</h2>

        <input
            type="text"
            name="NomeProduto"
            placeholder="Nome produto"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
            type="text"
            name="quantidade"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setquantidade(e.target.value)}
            className="w-full px-4 py-2 mb-6 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
            type="text"
            name="descricao"
            placeholder="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full px-4 py-2 mb-6 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
            type="caracteristicas"
            name="caracteristicas"
            placeholder="caracteristicas"
            value={caracteristicas}
            onChange={(e) => setcaracteristicas(e.target.value)}
            className="w-full px-4 py-2 mb-6 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
            Cadastrar
        </button>
      </form>
    </div>
  );
};