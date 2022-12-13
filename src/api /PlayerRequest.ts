import { del, get, post, put } from "./axios";
import { Player, PlayerList } from './types';

export const listPlayer = () => {

  const data = get<PlayerList>("/player");
  console.log(data.then());

  return data;
};

export const createPlayer = async ({nome,
  dataNascimento,
  apelido,
  email,
  cpf,
  senha,
  ddd,
  numeroTelefone,
  saldo,
  logradouro,
  tipoLogradouro,
  numeroEndereco,
  nomeCidade,
  bairro,
  complemento,
  cep,
  nomeEstado, uf}:Player) => {
  let player = {
    nome : nome,
    dataNascimento : dataNascimento,
    apelido:apelido,
    email:email,
    cpf:cpf,
    senha:senha,
    ddd:ddd,
    numeroTelefone:numeroTelefone,
    saldo:saldo,
    logradouro:logradouro,
    tipoLogradouro:tipoLogradouro,
    numeroEndereco:numeroEndereco,
    nomeCidade:nomeCidade,
    bairro:bairro,
    complemento:complemento,
    cep:cep,
    nomeEstado:nomeEstado,
    uf:uf
  };

  let res = post<Player>("/player", JSON.stringify(player)).then((dat) => {});
  console.log(res);

  return res;
};

export const updatePlayer = async({id,nome,
  dataNascimento,
  apelido,
  email,
  cpf,
  senha,
  ddd,
  numeroTelefone,
  saldo,
  logradouro,
  tipoLogradouro,
  numeroEndereco,
  nomeCidade,
  bairro,
  complemento,
  cep,
  nomeEstado, uf}:Player) => {
    console.log('id', id)
  let player = {
    idJogador: id,
     nome,
    apelido,
    cpf,
    email,
    senha,
  };
  console.log(player);
  
  let atuazlizacao = await put<Player>("/player", player);
  return atuazlizacao
};

export const deletePlayer = ({id,}: Player) =>{
  let player = {idJogador:id}
  let res = del<Player>("/player", player)
}
