const express = require('express');
const app = express();
const path =require('path');
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.send('¡Hola mundo!');
   });
   app.listen(3030, () =>
    console.log('Servidor corriendo en puerto 3030')
   ); 
   
//● / -> Debe direccionar al recurso index.html.
   app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
//babbage -> Debe direccionar al recurso babbage.html
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
   });
//berners-lee -> Debe direccionar al recurso berners-lee.html.   
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'));
   });
//clarke -> Debe direccionar al recurso clarke.html.
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'));
   });
///hamilton -> Debe direccionar al recurso hamilton.html.
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
   });
//hopper -> Debe direccionar al recurso hopper.html.
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.html'));
   });
//lovelace -> Debe direccionar al recurso lovelace.html.
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
   });
//turing-> Debe direccionar al recurso turing.html.
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.html'));
   });



   