"use client";

import { useState } from 'react';

import Button from '@mui/material/Button';
import AdicionarIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import ModalProdutos from './modalProdutos';
import ProdutoCard from '@/components/produtoCard';

import Colors from '@/app/utils/colors'

const disponiveis = [
  {
    name: "Produto 1",
    description: "aowijeoiawnef aweofijaewoif 1",
    file: "https://i.postimg.cc/BZ8FFX8Y/cake.jpg",
    price: "",
    link: "https://xxxxxxx.com/"
  },
  {
    name: "Produto 2",
    description: "aowijeoiawnef aweofijaewoif 2",
    file: "https://i.postimg.cc/wvprmS2F/flor-1.jpg",
    price: "",
    link: "https://yyyyyyy.com/"
  },
  {
    name: "Produto 3",
    description: "aowijeoiawnef aweofijaewoif 3",
    file: "https://i.postimg.cc/Hx9h4BPm/flor-2.jpg",
    price: "",
    link: "https://zzzzzzz.com/"
  },
  {
    name: "Produto 4",
    description: "aowijeoiawnef aweofijaewoif 4",
    file: "https://i.postimg.cc/wvprmS2F/flor-1.jpg",
    price: "",
    link: "https://wwwwwww.com/"
  },
  {
    name: "Produto 2",
    description: "aowijeoiawnef aweofijaewoif 2",
    file: "https://i.postimg.cc/wvprmS2F/flor-1.jpg",
    price: "",
    link: "https://yyyyyyy.com/"
  },
  {
    name: "Produto 3",
    description: "aowijeoiawnef aweofijaewoif 3",
    file: "https://i.postimg.cc/Hx9h4BPm/flor-2.jpg",
    price: "",
    link: "https://zzzzzzz.com/"
  },
  {
    name: "Produto 4",
    description: "aowijeoiawnef aweofijaewoif 4",
    file: "https://i.postimg.cc/wvprmS2F/flor-1.jpg",
    price: "",
    link: "https://wwwwwww.com/"
  }
];

export default function Produtos() {
  const [modalShow, setModalShow] = useState(false);

    return(
      <>
        <Stack 
          direction="row" 
          spacing={2}
          justifyContent="left"
          alignItems="left"
          sx={{ width: 1, height: "10vh" }}
        >
          <h1>
            Produtos
          </h1>
          
          <Button
            variant="contained" 
            style={{background: Colors.botaoComum, textTransform: 'none', width: 120, height: 40 }} 
            endIcon={<AdicionarIcon />}
            onClick={() => {
              //setModalShow(true)
              let texto = ''
              disponiveis.map((prod) => {
                texto += prod.name + '\n'
              })
              alert(texto)
            }}
          >
            Criar
          </Button>
        </Stack>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{xs: 3, sm: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <>
            {disponiveis.map((prod) => (
              <Grid key={prod.name} item xs={3}>
                <ProdutoCard picture={prod.file} description={prod.description} name={prod.name} link={prod.link} />
              </Grid>
              ))}
              </>

          </Grid>
        </Box>

        <ModalProdutos
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    
      </>
    );
  }
  