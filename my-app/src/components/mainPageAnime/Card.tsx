import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  background,
} from "@chakra-ui/react";


export interface AnimeAttributes {
    _id: string;
    title: string;
    //alternativeTitles:string;
    image: string;
    
    synopsis: string;
  
    
  }


export default function BlogPostWithImage({title, image, synopsis, _id, }: {title:any , image:any , synopsis:any, _id:any, }) {
    return (
        <Center py={4}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        >
    
        <Box
          h={"150px"}
          bg={"gray.100"}
          mt={-10}
          mx={-6}
          mb={6}
          pos={"relative"}
          >
        
              <Image
              src={
                 image 
                }
                objectFit="cover"
                boxSize="100%"
                />
       
        </Box>
          <>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
                >
                Blog
              </Text>

              <Heading
                bg="gray.50" _dark={{ bg: "gray.800" }}
                fontSize={"2xl"}
                fontFamily={"body"}
                >
                {title}
              </Heading>
              <Text color={"gray.500"}>
                {synopsis}
              </Text>
            </Stack>
            {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Achim Rolle</Text>
                <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              </Stack>
            </Stack> */}
          </>
      </Box>
    </Center>
  );
}
           
