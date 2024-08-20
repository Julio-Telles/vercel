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
            onClick={() => setModalShow(true)}
          >
            Criar
          </Button>
        </Stack>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{xs: 3, sm: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={3}>
              <ProdutoCard picture='https://i.postimg.cc/BZ8FFX8Y/cake.jpg' description='nada 1' name='Produto 1' link='https://xxxxxxx.com/' />
            </Grid>
            <Grid item xs={3}>
              <ProdutoCard picture='https://i.postimg.cc/wvprmS2F/flor-1.jpg' description='nada 2' name='Produto 2' link='https://yyyyyyy.com/' />
            </Grid>
            <Grid item xs={3}>
              <ProdutoCard picture='https://i.postimg.cc/Hx9h4BPm/flor-2.jpg' description='nada 3' name='Produto 3' link='https://zzzzzzz.com/' />
            </Grid>
            <Grid item xs={3}>
              <ProdutoCard picture='https://i.postimg.cc/BZ8FFX8Y/cake.jpg' description='nada 1' name='Produto 1' link='https://xxxxxxx.com/' />
            </Grid>

          </Grid>
        </Box>

        <ModalProdutos
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    
      </>
    );
  }
  