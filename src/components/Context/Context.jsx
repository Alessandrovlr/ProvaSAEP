import { createContext, useState } from 'react';
import { LoginRequenst } from '../../services/authLogin';
import { CadastroProdutoRequenst } from '../../services/cadastroProduto';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [produto, setProduto] = useState(null);

  const Login = async (userNome, userSenha) => {
    const { sucess, user } = await LoginRequenst(userNome, userSenha);
    setUser(sucess ? user : null);
    return sucess;
  };

  const CadastroProduto = async (nomeProduto, quantidade, descricao, caracteristicas) =>{
    const { sucess } = await CadastroProdutoRequenst(nomeProduto, quantidade, descricao, caracteristicas);
    if (sucess) {
      setProduto({ nomeProduto, quantidade, descricao, caracteristicas });
      return sucess;
    }else {
        return false;
    }

  }

  const Logout = () => setUser(null);

  return (
    <Context.Provider value={{ user, Login, Logout, produto, CadastroProduto }}>
      {children}
    </Context.Provider>
  );
};