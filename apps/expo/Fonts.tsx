import React from 'react'

import { useFonts } from 'expo-font'

export function Font({ children }) {
    const [ready] = useFonts({
        ['Heebo-Regular']: require('../next/public/fonts/Heebo/Heebo-Regular.ttf'),
        ['Heebo-Medium']: require('../next/public/fonts/Heebo/Heebo-Medium.ttf'),
        ['Heebo-Bold']: require('../next/public/fonts/Heebo/Heebo-Bold.ttf'),
        ['Montserrat-Bold']: require('../next/public/fonts/Montserrat/Montserrat-Bold.ttf'),
    })

    if (!ready) {
        return null
    }
    return <>{children}</>
}
