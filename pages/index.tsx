import React from 'react'
import Main from '../components/Layout/Main'
import { Box, Flex, Text, SimpleGrid , Image } from "@chakra-ui/core";
import { BIO, SITE_NAME, SLOGAN_SITE, URL_SITE } from '../constants/configs';
import GridHome from '../components/GridHome';

export default function Home() {
  return (
    <Main title={`${SITE_NAME} - ${SLOGAN_SITE}`}>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" h="100%">
          <Text fontSize="4xl">Minha BIO</Text>
          <Text fontSize="sm" textAlign="center" display="flex">{BIO}</Text>

          <Box display="flex" flexDirection={{md: "row", sm: "column", xs: "column"}}>
            <GridHome icon={`${URL_SITE}/assets/svg/online-shopping.svg`} title="Shopping Online" description="Além disso, você pode adicionar seus próprios fragmentos de código de exemplo que seriam renderizados para você, na página do componente."/>
            <GridHome icon={`${URL_SITE}/assets/svg/designer-de-web.svg`} title="Website" description="Além disso, você pode adicionar seus próprios fragmentos de código de exemplo que seriam renderizados para você, na página do componente."/>
            <GridHome icon={`${URL_SITE}/assets/svg/smartphone.svg`} title="Aplicações" description="Além disso, você pode adicionar seus próprios fragmentos de código de exemplo que seriam renderizados para você, na página do componente."/>
          </Box>
        </Flex>
    </Main>
  )
}
