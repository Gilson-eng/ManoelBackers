import React from 'react'
import NextLink from "next/link"

export default function Link({href, name, children}) {
  return (
    <NextLink href = {href}>
        {children}
    </NextLink>
  )
}
