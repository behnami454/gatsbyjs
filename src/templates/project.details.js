import React from 'react'
import Img from 'gatsby-image'
import '../styles/global.css'
import Navbar from '../components/Navbar'
import Footerr from '../components/Footerr'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title , nature } = data.markdownRemark.frontmatter  
    return(
        <div>
            <Navbar />
                 <div>
                    <h2>{title}</h2>
                    <div>
                        <Img fluid={nature.childImageSharp.fluid} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: html}} />
                </div>
                <Footerr />
        </div>
        

    )
}
export const query = graphql `
 query ProjectDetails($title: String){
     markdownRemark(frontmatter: {title: {eq: $title}}){
         html
         frontmatter {
             title
             nature{
                 childImageSharp {
                     fluid{
                         ...GatsbyImageSharpFluid
                     }
                 }
             }
         }
     }
 }
 `