const jwt = require('jsonwebtoken');

// Your client-side token
const clientToken = localStorage.getItem('token');

import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
// Decode the client-side token
const clientDecodedToken = jwt.decode(clientToken);
console.log('Client Decoded Token:', clientDecodedToken);

// Verify the token with the server's public key
jwt.verify(clientToken, PRCOESS.env.JWTPRIVATEKEY, (err, serverDecodedToken) => {
  if (err) {
    console.error('Token verification failed:', err);
  } else {
    console.log('Server Decoded Token:', serverDecodedToken);
    // Check if the tokens match
    const tokensMatch = JSON.stringify(clientDecodedToken) === JSON.stringify(serverDecodedToken);
    console.log('Tokens Match:', tokensMatch);
  }
});
