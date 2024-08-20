'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Button from '@mui/material/Button';
import ProdutosIcon from '@mui/icons-material/ExtensionOutlined';
import VendasIcon from '@mui/icons-material/PlaylistAddCheck';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import VerificadoIcon from '@mui/icons-material/VerifiedSharp';

import List from '@mui/material/List';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import "bootstrap/dist/css/bootstrap.min.css";

import Image from 'next/image';

import Colors from '@/app/utils/colors'

const backgnd = "#d9d9d9";

import logoIcon from './images/logo.png';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

{/* ------------------------------------------------------------------- */}
/* the following code is about the DRAWER */
const [state, setState] = React.useState(false);

const toggleDrawer = (open: boolean) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState(open);
};

const list = () => (
  <Box
    sx={{ width: 200 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}    
    verticalAlign= 'center'
    textAlign= 'center'
  >
    <Image 
      src={logoIcon}
      alt="TELMEX logo"
      width={155}
    ></Image>       

    <List spacing={2}>
    
        <Button 
          variant="contained" 
          style={{background: Colors.botaoComum, textTransform: 'none', width: 170 }}
          startIcon={<ProdutosIcon style={{transform: 'rotate(270deg)' }} />}
          href="/produtos"
        >
          Produtos
        </Button>

        <p></p>

        <Button 
          variant="contained" 
          style={{background: Colors.botaoComum, textTransform: 'none', width: 170 }} 
          startIcon={<VendasIcon />}
          href="/vendas"
        >
          Vendas
        </Button>
        
        {/*
        <Button variant="contained" startIcon={<VerificadoIcon />}>
          Verificado
        </Button>
*/}
    </List>
  </Box>
);

{/* ------------------------------------------------------------------- */}

  return (
    <html lang="en">
      <body>
      <h5>PÁGINA</h5>
        
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: "100%" },
          ml: { sm: "0px" },
        }}

        style={{background: Colors.branco}}
      >
        <Toolbar>
{/* ------------------------------------------------------------------- */}
        <IconButton 
          edge="start"
          aria-label="open drawer"
          size="large" 
          color="black"
          onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="inherit"/>
        </IconButton>
        
        <Drawer
          anchor={'left'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>

{/* ------------------------------------------------------------------- */}

        <Image 
          src={logoIcon}
          alt="TELMEX logo"
          width={150}
          justifyContent='center' 
        ></Image>    

        </Toolbar>
      </AppBar>
      
{/* --------------------------------------------------------------------------------- */}

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 5, width: { sm: "100%" } }}
          style={{background: Colors.backgnd}}
        >
        <div className="page-content" />
        
        {children}
        
        </Box>
      </Box>
    
      </body>
    </html>
  );
}
