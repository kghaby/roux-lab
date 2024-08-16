import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./member_card.css";

// TODO: put image on side unless small width 

const MemberCard = ({ name, role, email, imgName, topics, hobbies, moreLink }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "group/members"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                quality: 95
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.edges.find(
    edge => edge.node.relativePath === `group/members/${imgName}`
  );

  const imageData = image ? getImage(image.node.childImageSharp.gatsbyImageData) : null;

  return (
    <div className="memberCard">
      {imgName && 
        <GatsbyImage 
          image={imageData} 
          alt={name} 
          className="memberPhoto" 
          imgStyle={{ 
            // borderRadius: "0.5rem",
          }}
          style={{
            maxWidth: "max-content",
            borderRadius: "0.5rem",
          }}
        />
      }
      <hgroup className="memberInfo">
        <h3>{name}</h3>
        {role && <p><i>{role}</i></p>}
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        {moreLink && (
          <p>
            <a href={moreLink}>More...</a>
          </p>
        )}
        <div className="moreInfo">
          {topics && (
            <p>
              <b>Topics:</b> {topics}
            </p>
          )}
          {hobbies && (
            <p>
              <b>Hobbies:</b> {hobbies}
            </p>
          )}
        </div>
      </hgroup>
    </div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  email: PropTypes.string,
  imgName: PropTypes.string,
  bio: PropTypes.string,
  hobbies: PropTypes.string,
  topics: PropTypes.string,
  moreLink: PropTypes.string,
};

export default MemberCard;
