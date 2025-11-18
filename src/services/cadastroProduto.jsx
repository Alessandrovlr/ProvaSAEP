import axios from "axios";

const API_URL = "http://localhost:3001/prdutos";


export const CadastroProdutoRequenst = async (nome, descricao, preco) => {
    
  try {

    const response = await axios.post(API_URL, {
      nome: nome,
      descricao: descricao,
      preco: preco
    });

    if (response.status === 201) {
      return { sucess: true, produto: response.data };
    } else {
      return { sucess: false };
    }

  } catch (error) {
    console.log("Erro ao cadastrar produto", error);
    return { sucess: false };
  }
};