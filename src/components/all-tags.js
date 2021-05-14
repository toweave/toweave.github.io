/**
 * Hot component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Tag } from 'antd'
import styles from './all-tags.module.css'

function AllTags () {
  return (
    <StaticQuery
      query={allTagsQuery}
      render={data => {
        const tags = data.allMarkdownRemark.group
        return (
          <div>
            <p>我的标签</p>
            {tags.map((item) => {
              const title = item.fieldValue || '--'
              const count = item.totalCount || '0'
              return (
                <div key={title} className={ styles.tagItem }>
                  <Tag color="#2db7f5">
                    <Link style={{ boxShadow: `none` }} to={`/tags/${title}/`}>{title}
                      <span className={ styles.tagCount }>{count}</span>
                    </Link>
                  </Tag>
                </div>
              )
            })}
          </div>
        )
      }}
    />
  )
}

const allTagsQuery = graphql`
  query AllTagsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default AllTags
