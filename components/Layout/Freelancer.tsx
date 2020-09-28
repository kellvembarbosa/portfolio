import { Box, Flex, Image, Text } from '@chakra-ui/core'
import { NONAME } from 'dns'
import React from 'react'
import { BIO, SITE_NAME, URL_SITE, SKILL_NAME } from '../../constants/configs'

export default function Freelancer() {
    return (
        <Box flexDirection="column" alignItems="center" display="flex">
            <Box m="4" display="flex" flexDirection="column" alignItems="center" > 
                <Image w={40} h={40} src={`${URL_SITE}/assets/img/profile.jpg`} alt={SITE_NAME} rounded="50%" shadow="lg"/>
            </Box>
            <Box mb="4" display="flex" flexDirection="column">
                <Text fontSize="2xl"textAlign="center">{SITE_NAME}</Text>
                <Text fontSize="md"textAlign="center">{SKILL_NAME}</Text>
            </Box>
        </Box>
    )
}
