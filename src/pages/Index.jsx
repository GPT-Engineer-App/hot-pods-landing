import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaCoffee, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3MTM1MTY1MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" objectFit="cover" alt="Hot Pods Coffee Beans" />
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to Hot Pods
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Your premier source for white label and private label coffee manufacturing. Specializing in K-cup and whole bean packaging.
          </Text>
          <Flex wrap="wrap" justify="center" mt={8}>
            <Button leftIcon={<FaCoffee />} colorScheme="orange" m={2}>
              Our Products
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" m={2}>
              Contact Us
            </Button>
            <Button leftIcon={<FaPhoneAlt />} colorScheme="blue" m={2}>
              Call Now
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
