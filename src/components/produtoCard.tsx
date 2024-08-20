"use client";

import React from 'react'

import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Torta from "@/images/cake.jpg"

import Colors from '@/app/utils/colors'

type ItemProps = {
  picture: string;
  description: string;
  name: string;
  link: string;
}

export default function ProdutoCard({ picture, description, name, link }: ItemProps) {
  return (
    
    <div style={{paddingBottom: 10, fontSize: 10, textAlign: 'center'}}>
    
    <Card sx={{ 
        maxWidth: 280,
        padding: '5%'
    }}>
      <CardMedia
        sx={{ height: 160, borderRadius: 1 }}
        image={picture}
        title={description}
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <br/>
        <Typography color="text.secondary">
            Link de checkout
            <Button 
            variant="contained" 
            style={{color: 'lightgray', background: Colors.branco, textAlign: 'left', textTransform: 'none', width: '100%', border: '2px dashed', borderColor: Colors.botaoComum }}
            href="/vendas"
            >
                {link}
            </Button>

        </Typography>
      </CardContent>

      <CardActions>
        
        <Button 
          variant="contained" 
          style={{background: Colors.botaoEditar, textTransform: 'none', width: 170 }}
          href="/vendas"
        >
          Editar
        </Button>
        
        <Button 
          variant="contained" 
          style={{background: Colors.botaoExcluir, textTransform: 'none', width: 170 }}
          href="/vendas"
        >
          Excluir
        </Button>

      </CardActions>
    </Card>
    </div>
  )
}
