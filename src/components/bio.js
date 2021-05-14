/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Row, Col } from 'antd'
import { rhythm } from '../utils/typography'

function Bio () {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Row>
            <Col sm={{ span: 0 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <Image fixed={data.avatar.childImageSharp.fixed} alt={author} style={{ marginRight: rhythm(1 / 2), marginBottom: 0, minWidth: 64, borderRadius: `100%` }} imgStyle={{ borderRadius: `50%` }}/>
            </Col>
            <Col sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 18 }}>
              <p>
                <strong>关于作者</strong>
                <br/>
                本人是前端工程师 <strong>{author}</strong>. 一个努力成为优秀工程师的男人.
                <a target="_blank" rel="noopener noreferrer" href={`https://toweave.github.io/intro/`}>
                  了解更多...
                </a>
              </p>
            </Col>
          </Row>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/toweave_64_64.jpg/" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
