
import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "../Styles/StylesHeader"


const Header = () => {
  return (
    <S.Menu>
      <S.Menu2>
      <Link to ="/">Home
      </Link>
      <Link to ="/calendario">Calendario
      </Link>
      <Link to ="/dias">Dias
      </Link>
      <Link to ="/doe">Doe
      </Link>
      <Link to ="/sobre">Sobre
      </Link>
      </S.Menu2>
      
    </S.Menu>
  )
}

export default Header