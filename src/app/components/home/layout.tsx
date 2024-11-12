import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'HomeLayout metadata'
}
type Props = { children: React.ReactNode }
const HomeLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default HomeLayout;