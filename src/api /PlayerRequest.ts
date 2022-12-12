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
  nomeEstado,}:Player) => {
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
  };

  let res = post<Player>("/player", JSON.stringify(player)).then((dat) => {});
  console.log(res);

  return res;
};

export const updatePlayer = () => {
  let professor = {
    id: null,
    name: "jenifer",
    rg: "50490624",
    cpf: "48005136854",
    ddd: "11",
    phonenumber: "995492899",
    cep: "08785380",
    street: "naryciso lucarine",
    number: "11",
    district: "bosque",
    city: "mogi das crutzes",
    userName: "joqum@l.com",
    password: "1222456",
    specialization: "Professor",
  };

  let atuazlizacao = put("/professor/29", professor);
};

export const deletePlayer = (player: Player) =>{
  let res = del<Player>("/player", player)
}
