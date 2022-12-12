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
        <Input type="text" label='Senha' {...register("senha")}/>
        <Input type="text" label='Data Nascimento'{...register("dataNascimento")}/>
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
        <Input type="text" label='cidade'{...register("nomeCidade")}/>
        <Input type="text" label='estado'{...register("nomeEstado")}/>
        <Input type="text" label='cep'{...register("cep")}/>
       
        
        </FormContent>
        
    </FormContainer>
    <Button name="cadastrar" type="submit"/>
    
    </Container>
    </form>
    )
}