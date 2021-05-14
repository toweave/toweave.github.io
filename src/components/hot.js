/**
 * Hot component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styles from './hot.module.css'

function Hot () {
  return (
    <StaticQuery
      query={hotQuery}
      render={data => {
        const hots = data.allMarkdownRemark.edges
        return (
          <div>
            <p>热门文章</p>
            {hots.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className={styles.hotItem} key={node.fields.slug}>
                  <div>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>{title}</Link>
                    <br/>
                    <small>{node.frontmatter.date} ( ISO 8601 )</small>
                  </div>
                  <div className={styles.oneLine}>{node.frontmatter.description}</div>
                </div>
              )
            })}
          </div>
        )
      }}
    />
  )
}

const hotQuery = graphql`
  query HotQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {tags:{ in: "HOT"}}}
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
            tags
            title
            description
          }
        }
      }
    }
  }
`

export default Hot
