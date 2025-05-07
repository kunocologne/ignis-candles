"use client";

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from "@/styles";

type InputProps = ChakraInputProps & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export const Input = ({
  label,
  helperText,
  errorMessage,
  isRequired = false,
  leftElement,
  rightElement,
  isInvalid,
  ...props
}: InputProps) => {
  const hasError = isInvalid || !!errorMessage;
  
  return (
    <FormControl isRequired={isRequired} isInvalid={hasError} mb={4}>
      {label && (
        <FormLabel 
          fontWeight="500" 
          fontSize="sm" 
          mb={1}
          color={colors.midnightCharcoal}
        >
          {label}
        </FormLabel>
      )}
      
      <InputGroup>
        {leftElement && (
          <InputLeftElement pointerEvents="none">
            {leftElement}
          </InputLeftElement>
        )}
        
        <ChakraInput
          borderColor={colors.ashGray}
          _hover={{ borderColor: colors.midnightCharcoal }}
          _focus={{ 
            borderColor: colors.phoenixOrange, 
            boxShadow: `0 0 0 1px ${colors.phoenixOrange}` 
          }}
          {...props}
        />
        
        {rightElement && (
          <InputRightElement>
            {rightElement}
          </InputRightElement>
        )}
      </InputGroup>
      
      {helperText && !hasError && (
        <FormHelperText fontSize="xs">{helperText}</FormHelperText>
      )}
      
      {errorMessage && (
        <FormErrorMessage fontSize="xs">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Textarea = ({
  label,
  helperText,
  errorMessage,
  isRequired = false,
  isInvalid,
  ...props
}: InputProps) => {
  const hasError = isInvalid || !!errorMessage;
  
  return (
    <FormControl isRequired={isRequired} isInvalid={hasError} mb={4}>
      {label && (
        <FormLabel 
          fontWeight="500" 
          fontSize="sm" 
          mb={1}
          color={colors.midnightCharcoal}
        >
          {label}
        </FormLabel>
      )}
      
      <ChakraInput
        as="textarea"
        minH="120px"
        py={2}
        borderColor={colors.ashGray}
        _hover={{ borderColor: colors.midnightCharcoal }}
        _focus={{ 
          borderColor: colors.phoenixOrange, 
          boxShadow: `0 0 0 1px ${colors.phoenixOrange}` 
        }}
        {...props}
      />
      
      {helperText && !hasError && (
        <FormHelperText fontSize="xs">{helperText}</FormHelperText>
      )}
      
      {errorMessage && (
        <FormErrorMessage fontSize="xs">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
}; 