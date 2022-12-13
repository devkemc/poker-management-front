import * as React from 'react';
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import { Container, FormContent, InputsContent, Edit } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {Pencil, Target} from 'phosphor-react'
import { updatePlayer } from '../../api /PlayerRequest';

export type DataAtualizar = {
    id:number,
    nome:string,
    apelido:string,
    email:string,
    senha:string,
    cpf:string
}

export const AtualizarModal = ({id ,apelido, cpf, email, nome, senha}:DataAtualizar) => {

  const {reset, register, handleSubmit} = useForm()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function handleUpdate(data: any){
    console.log('data:', data)
    updatePlayer(data)
    reset()
    handleClose()
  }
  return (
    <div>
      <Edit onClick={handleOpen}><Pencil/></Edit>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Container>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <FormContent>
              <h2>Atualizar</h2>
              <InputsContent>
              <Input type="text" label='Id' value={id} {...register("id")}/>
                <Input type="text" label='Nome' placeholder={nome} {...register("nome")}/>
                <Input type="text" label='Apelido'placeholder={apelido}{...register("apelido")}/>
                <Input type="text" label='Email' placeholder={email} {...register("email")}/>
                <Input type="text" label='Senha' placeholder={senha} {...register("senha")}/>
                <Input type="text" label='CPF' placeholder={cpf} {...register("cpf")}/>
              </InputsContent>
              <Button name='Salvar' type='submit' />
            </FormContent>
        </form>
        </Container>
      </Modal>
    </div>
  );
}
