import Link from 'next/link';
import Image from 'next/image';

import React from 'react';
import { AiFillGithub, AiFillInstagram,AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa'
import { DiCssdeck } from 'react-icons/di';
import LogImg from './LogImg';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          {/* <DiCssdeck size="3rem" /> <span>Portfolio</span> */}
          <LogImg alt='logo'/>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Mint</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>How</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <FaDiscord size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
