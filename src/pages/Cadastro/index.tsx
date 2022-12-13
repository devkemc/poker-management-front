import { useForm } from "react-hook-form";
import { FormContent, FormContainer, Container } from './styles';
import { Input } from '../../components/Input/index';
import { Player } from "../../api /types";
import { createPlayer } from '../../api /PlayerRequest';
import { Button } from "../../components/Button";
export const Cadastro = () =>{
  const {reset, register, handleSubmit} = useForm<Player>()

  function handleFormSubmit(dados:Player){
    createPlayer(dados).then((resp)=> {console.log(resp); alert("cadastro Efetuado"); reset()}

    )
  }
    return(
      <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container>
     
        <FormContainer>
        <FormContent>
            <h2>Dados Pessoais</h2>
        <Input type="text" label='Nome' {...register("nome")}/>
        <Input type="text" label='Apelido'{...register("apelido")}/>
        <Input type="text" label='Email' {...register("email")}/>
        <Input type="password" label='Senha' {...register("senha")}/>
        <Input type="date" label='Data Nascimento'{...register("dataNascimento")}/>
        <Input type="text" label='CPF'{...register("cpf")}/>
        <Input type="text" label='DDD' {...register("ddd")}/>
        <Input type="text" label='Numero'{...register("numeroTelefone")}/>
        <Input type="text" label='Saldo Carteira'{...register("saldo")}/>
        
        
        </FormContent>
        <FormContent>
        <h2>Endereço</h2>
        <Input type="text" label='Tipo logradouro' {...register("tipoLogradouro")}/>
        <Input type="text" label='Logradouro'{...register("logradouro")}/>
        <Input type="text" label='Numero'{...register("numeroEndereco")}/>
        <Input type="text" label='Complemento'{...register("complemento")}/>
        <Input type="text" label='Bairro'{...register("bairro")}/>
        <Input type="text" label='Cidade'{...register("nomeCidade")}/>
        <Input type="text" label='Estado'{...register("nomeEstado")}/>
        <Input type="text" label='Cep'{...register("cep")}/>
        <Input type ="text" label='Uf'{...register("uf")}/>
       
        
        </FormContent>
        
    </FormContainer>
    <Button name="Salvar" type="submit"/>
    
    </Container>
    </form>
    )
}