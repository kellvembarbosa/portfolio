import { Box, Text, Image } from '@chakra-ui/core'
import React from 'react'

export default function GridHome( {icon, title, description} ) {
    return (
        <>
            <Box  
            display="flex" 
            p={4} rounded={18} 
            shadow="lg" 
            mr={4} mt={4}
            alignItems="center">
                <Box>
                    <Image
                        rounded="lg" 
                        src={icon} 
                        w={80} 
                        mr={4} 
                        float="left"/>
                    <Text fontSize="xl" fontWeight="bold">{title}</Text>
                    <Text fontSize="sm">{description}</Text>
                </Box>
            </Box>
        </>
    )
}
