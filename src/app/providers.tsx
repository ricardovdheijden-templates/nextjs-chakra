'use client';

import { ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/app/theme';

export const Providers = ({ children }: { children: ReactNode }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
