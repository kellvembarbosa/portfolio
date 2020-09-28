import { Box, Divider, Flex, Grid, Link } from '@chakra-ui/core'
import React from 'react'
import { URL_SITE } from '../../constants/configs'

export default function Menu() {
    return (
        <Box flexDirection={{md: "column", sm: "row"}} bg={{md: "gray.50", sm: "gray.200", xs:"gray.200"}}textAlign="center" justifyContent="center" alignItems="center" display={{md: "flex", sm: "flex", xs: "flex"}} m={{md: 0, sm: 0}} h={{md: "auto", sm: 50, xs: 50}}>
            <Link p={2} _hover={{color: "blue.500"}} href={URL_SITE}>Home</Link>
            <Link p={2} _hover={{color: "blue.500"}} href={`${URL_SITE}/apps`}>Apps</Link>
            <Link p={2} _hover={{color: "blue.500"}} href={`${URL_SITE}/services`}>Services</Link>
            <Link p={2} _hover={{color: "blue.500"}} href={`${URL_SITE}/blog`}>Blog</Link>
            <Link p={2} _hover={{color: "blue.500"}} href={`${URL_SITE}/contacto`}>Contacto</Link>
        </Box>
    )
}
