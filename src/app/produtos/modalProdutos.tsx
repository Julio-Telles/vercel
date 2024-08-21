import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CurrencyInput from 'react-currency-input-field';

import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import AdicionarIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import Colors from '@/app/utils/colors'

export default function ModalProdutos(props: any) {
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
                    <Form.Control type="text" placeholder="Nome" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descrição" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Thumbnail</Form.Label>
                    <Button
                    variant="contained" 
                    style={{height: 70, color: Colors.botaoComum, background: Colors.branco, textAlign: 'left', textTransform: 'none', width: '100%', border: '2px dashed', borderColor: Colors.botaoComum }}
                    onClick={() => alert("uploaded")}
                    >
                        
                        <Stack spacing={0}>

                            <IconButton>
                                <UploadIcon />
                            </IconButton>
                            
                            <Typography gutterBottom variant="h6" component="div">
                                Upload
                            </Typography>

                        </Stack>
                        
                    </Button>
                    
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Preço</Form.Label>
                    <br/>
                    <CurrencyInput
                        id="input-example"
                        name="input-name"
                        placeholder="R$ 0,00"
                        decimalsLimit={2}
                        onValueChange={(value, name, values) => console.log(value, name, values)}
                    />

                </Form.Group>

                <Button
                    variant="contained" 
                    style={{background: Colors.botaoComum, textTransform: 'none', width: '100%', height: 40 }} 
                    endIcon={<AdicionarIcon />}
                    onClick={props.onHide}
                >
                    Criar produto
                </Button>
            </Form>
            
          </Modal.Body>
        </Modal>
      );
  }
  