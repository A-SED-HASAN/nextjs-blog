import React from 'react'
import PropTypes from 'prop-types'
import { SearchIcon } from '../../assets/icons'
import { Toolbar, Button, IconButton, Typography } from '@mui/material'
import Link from 'next/link'

export default function Header({ sections, links, title }) {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size='small'>Subscribe</Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}>
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {links.map((link) => (
          <Link
            color='inherit'
            noWrap
            key={link.title}
            variant='body2'
            href={link.url}
            sx={{ p: 1, flexShrink: 0 }}>
            {link.title}
          </Link>
        ))}
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {sections.map((section) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  )
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}
