"use client";

import { useState } from 'react';

import axios from "axios";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CurrencyInput from 'react-currency-input-field';

import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import AdicionarIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import Colors from '@/app/utils/colors'

var novoProd = {
  name: "",
  description: "",
  file: "",
  price: "",
}

export default function ModalProdutos(props: any) {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState('fazer upload');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file as Blob);
                
        const response = await axios.post("/api/file", formData);
/*
        const response = await fetch("/api/file", {
            method: 'POST',
            body: formData
        })
        const resp = await response.json();
        
        novoProd["file"] = resp.url;
*/

        setImage('UPLOAD COM SUCESSO!')

        novoProd["file"] = response.data.url;
        console.log("--->>> AXIOS: " + JSON.stringify(novoProd))
    }

    const clicar = () => {
        var libera = true;

        Object.entries(novoProd).forEach(([key, value]) => {
            if (value === "") {
                libera = false;
            }
        });

        if(!libera){
            alert('Preencha todos os campos')
        }
        else{
            setImage('fazer upload');
            novoProd["name"] = "";
            novoProd["description"] = "";
            novoProd["file"] = "";
            novoProd["price"] = "";

            props.onHide()
        }

        //alert('->' + JSON.stringify(novoProd))
    }
    
    return (
        
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Criar produto
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Nome do produto</Form.Label>
                    <Form.Control type="text" placeholder="Nome" onChange={(e) => novoProd["name"] = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descrição"  onChange={(e) => novoProd["description"] = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Thumbnail</Form.Label>

                        <IconButton>
                            <UploadIcon />
                        </IconButton>
                                                
                </Form.Group>

            </Form>

                <form 
                    onSubmit={handleSubmit}
                    style={{height: 70, color: Colors.botaoComum, background: Colors.branco, textAlign: 'left', textTransform: 'none', width: '100%', border: '2px dashed', borderColor: Colors.botaoComum }}
                >
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.item(0) || null)}
                    />
                    <button type='submit'>Upload</button>
                    <>{image}</>
                </form>
                
            <Form>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Preço</Form.Label>
                    <br/>
                    <CurrencyInput
                        id="input-example"
                        name="input-name"
                        placeholder="R$ 0.00"
                        decimalsLimit={2}
                        //onChange={(e) => novoProd["price"] = e.target.value}
                        onValueChange={(value, name, values) => novoProd["price"] = value!.toString()}
                    />

                </Form.Group>

                <Button
                    variant="contained" 
                    style={{background: Colors.botaoComum, textTransform: 'none', width: '100%', height: 40 }} 
                    endIcon={<AdicionarIcon />}
                    onClick={clicar}
                >
                    Criar produto
                </Button>
            </Form>
            
          </Modal.Body>
        </Modal>
      );
  }
  