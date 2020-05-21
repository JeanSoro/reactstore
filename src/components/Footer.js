import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context/products';

export default function Footer() {

  const { links } = useContext(ProductContext);
  console.log(links)


  return (
    <FooterWrapper>
      <div className="container py-3">

        <div className="col-md-6">
          <p className="text-capitalize">copyright &copy; {new Date().getFullYear()}. all rights reserved{" "}</p>
        </div>
        <div className="col-md-6 d-flex justify-content-around">
          {links.map(icon => <a key={icon.id} href={icon.url}>
            {icon.icon}
          </a>)}
        </div>

      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`

background: var(--darkGrey);
color: var(--mainWhite);

.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.icon{
  font-size: 1.5rem;
  color:var(--mainWhite);
  transition: var(--mainTransition);
}

.icon:hover{
  color: var(--primaryColor);
  cursor: pointer;
}


`