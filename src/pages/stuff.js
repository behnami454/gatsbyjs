import React from 'react'
import Navbar from '../components/Navbar'
import Footerr from '../components/Footerr'
import '../styles/global.css'
import '../styles/stuff.module.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Stuff ({ data }) {
    const stuff = data.allMarkdownRemark.nodes 
    return(
        <div>
            <Navbar />
            <div>
                {stuff.map(stuf => (
                    <Link to={"/projects/" + stuf.frontmatter.title} key={stuf.id}>
                      <div>
                          <Img fluid={stuf.frontmatter.nature.childImageSharp.fluid} style={{ maxWidth: '20%'}} />
                          <h3>{ stuf.frontmatter.title }</h3>
                          </div>
                          
                          </Link>
                ))}
            </div>
            <Footerr />
        </div>
    )
}
export const query = graphql`
query ProjectPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        nature {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
  `