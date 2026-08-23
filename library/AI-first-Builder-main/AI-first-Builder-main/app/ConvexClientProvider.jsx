"use client";

import React, { useMemo } from 'react';
import { ConvexProvider, ConvexReactClient } from "convex/react";

const ConvexClientProvider = ({ children, convexUrl }) => {
    const convex = useMemo(() => new ConvexReactClient(convexUrl), [convexUrl]);

    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    );
};

export default ConvexClientProvider;