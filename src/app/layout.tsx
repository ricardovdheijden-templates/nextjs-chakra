import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Providers } from '@/app/providers';

import { fonts } from './fonts';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={fonts.rubik.variable}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
