'use client';

import { ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

export const Providers = ({ children }: { children: ReactNode }) => (
    <ChakraProvider>{children}</ChakraProvider>
);
