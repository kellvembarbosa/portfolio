import { Box, Divider, Flex, Grid, Link } from '@chakra-ui/core'
import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Head from 'next/head'
import { SITE_NAME, SLOGAN_SITE } from '../../constants/configs'
import Freelancer from './Freelancer'
import { title } from 'process'

export default function Main({ children, title }) {

    return (
        <>
            <Head>
                <title>{(title.indexOf(SLOGAN_SITE) !== -1) ? title : `${title} - ${SLOGAN_SITE}`}</title>
            </Head>
            <Flex
                pt={{ md: 6, sm: 0, xs: 0 }}
                pr={{ md: 6, sm: 0, xs: 0 }}
                pl={{ md: 6, sm: 0, xs: 0 }}
                pb={{ md: 6, sm: 0, xs: 0 }}
                display={{ md: "flex" }}
                bg="green.500"
                h="100vh"
                minHeight={620} >
                <Flex
                    justifyContent="center"
                    flexDirection="column"
                    bg="gray.50"
                    minHeight={{ md: 620, sm: "auto", xs: "auto" }}
                    shadow="lg"
                    w={{ xl: "25vw", lg: "25%", md: "30%", sm: "100%", xs: "100%" }}
                    h={{ xl: "94vh", md: "94vh", sm: "auto", xs: "auto" }}
                    roundedBottomLeft={{ md: 25 }}
                    roundedTopLeft={{ md: 25, /* sm: "lg" */ }}
                    roundedTopRight={{ md: "none", /* sm: "lg" */ }}>

                    <Freelancer />
                    <Divider borderColor="gray.500" ml={50} mr={50} w={{ md: "auto", sm: 0, xs: 0 }} opacity={0.2} />
                    <Menu />
                    <Divider borderColor="gray.500" ml={50} mr={50} w={{ md: "auto", sm: 0, xs: 0 }} opacity={0.2} />
                    <Footer />

                </Flex>
                <Flex
                    alignContent="flex-end"
                    overflowY="scroll"
                    minHeight={{ md: 620, sm: "auto", xs: "auto" }}
                    shadow="lg"
                    bg="white"
                    w={{ xl: "75vw", lg: "75%", md: "70%", sm: "100%", xs: "100%" }}
                    h={{ lg: "94vh", md: "94vh", sm: "auto", xs: "auto" }}
                    roundedTopRight={{ xl: 25, lg: 25, md: 25 }}
                    roundedBottomRight={{ xl: 25, lg: 25, md: 25, /* sm: "lg" */ }}
                    roundedBottomLeft={{ md: "none", /* sm: "lg" */ }}>

                    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" w="100vw" roundedTopRight={{ xl: "lg", lg: "lg", md: "lg", sm: "none" }} p={4}>
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
    // return (
    //     <Box pr="24" pl="24" pt="24" w="100%" h="100%" bg="blue.600">
    //         <Box roundedTop="lg" w="100%" h="90vh" bg="gray.900" shadow="md">
    //             <Header />
    //                 {children}
    //             <Footer />
    //         </Box>
    //     </Box>
    // )
}
