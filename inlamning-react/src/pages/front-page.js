import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

export function FrontPage() {
  return (
    <div className="container px-4 py-4" id="home">
    <div className="bg-body-tertiary p-5 rounded">
      <div className="col-sm-8 py-5 mx-auto">
        <h1 className="display-5 fw-normal">Välkommen till Krolles musikaliska samling</h1>
          <p className="fs-5">På denna hemsida får du möjlighet att se hur Jonny Åhslund samlade sina mest peppade musikgrupper! Häng med och glöm inte att trycka på knappen uppe till höger för att ta dig vidare :) </p>
        
          <p>Annars kan du ta en genväg med denna knapp nedan :D</p>
          <LinkContainer to="/groups">
          <NavLink className="btn btn-primary">Klicka på mig</NavLink>
          </LinkContainer>
      </div>
    </div>
  </div>
  )
}
