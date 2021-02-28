import { Flex, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleType = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Flex alignItems="center" w="300px" mb={8}>
      <Input
        as="input"
        size="lg"
        placeholder="Search"
        bg="grey"
        border="hidden"
        focusBorderColor="hidden"
        color="white"
        _placeholder={{ color: "#e2e2e2" }}
        onChange={(e) => handleType(e)}
      />
    </Flex>
  );
};

export default SearchBar;
