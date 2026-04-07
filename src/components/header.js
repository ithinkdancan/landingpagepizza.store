import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000`,
      marginBottom: 0,
      position: `sticky`,
      top: 0,
      zIndex: 100,
      boxShadow: `0 2px 8px rgba(0,0,0,0.12)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0.75rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <a
        href="https://retail.staging.heb.com/pizza?setPreview=9868"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontSize: `1.4rem`,
          fontWeight: 900,
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
          letterSpacing: `-0.02em`,
        }}
      >
        {siteTitle}
      </a>
      <a
        href="https://retail.staging.heb.com/pizza?setPreview=9868"
        style={{
          background: `white`,
          color: `#000`,
          padding: `0.5rem 1.25rem`,
          borderRadius: `24px`,
          textDecoration: `none`,
          fontWeight: 700,
          fontSize: `0.875rem`,
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
        }}
      >
        Order Now
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
