const express = require( "express" );
const bodyparser = require( "body-parser" );
const web = express();

web.use( bodyparser.urlencoded() );

console.log( "Beginning Server..." );

const server = web.listen(3000, function () {
    console.log( "Server on" );
});


web.get("/", function( req, res ) {    
    res.sendfile( 'form.html' );
});


let baseDatos = {
  usuario : 'Aristoteles',
  contrasena : 'papasfritas'
};


web.post("/login", function( req, res ) {    
    
    console.log( req.body );
    
    if( req.body.user.name == baseDatos.usuario && req.body.user.pass == baseDatos.contrasena ) {
    
        res.send( "Accediste correcctamente" );
        console.log( "Accediste correcctamente, Son iguales " );
    }else{
        res.send( "Usuario o contraseña incorrectos" );
        console.log( "Usuario o contraseña incorrectos, NO Son iguales " );
    }
});
