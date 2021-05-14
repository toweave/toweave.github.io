/**
 * Hot component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import { Link } from 'gatsby'
import { Tag } from 'antd'
import styles from './article-tags.module.css'

class ArticleTags extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { tags } = this.props
    return (
      <div>
        {tags && (<span>标签：</span>)}
        {tags && tags.map((item) => {
          return (
            <div key={item} className={styles.tagItem}>
              <Tag color="#2db7f5">
                <Link style={{boxShadow: `none`}} to={`/tags/${item}/`}>
                  {item}
                </Link>
              </Tag>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ArticleTags
