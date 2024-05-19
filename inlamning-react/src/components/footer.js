import React from 'react';
import {Link } from "react-router-dom";
export function Footer() {
  return (
    <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <Link style={{textDecoration: 'none'}} to="/">
                        <span className="mb-3 mb-md-0 text-body-secondary">&copy; Krolles workshop</span>
                </Link>
                </div>
                <Link style={{textDecoration: 'none'}} to="https://appmusicwebapinet8.azurewebsites.net/swagger/index.html" >
                        <span className="col-md-6 align-items-center text-body-secondary">API source</span>
                </Link> 
            </footer>
        </div>  
  )
}
