import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll2 from '../../components/BlogRoll2'

export default class BlogIndexPage extends React.Component {
  render() {

  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/planet.png')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '0.5rem',
                  }}
                >
                  Our World
                </h1>
              </div>
            </div>
              <BlogRoll2 />
            </div>
        </section>
      </Layout>
    )
  }
}
