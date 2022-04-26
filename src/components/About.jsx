import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles"; 
 
export default function About() {
  return (
    <Section id="About">
      <div className="title">
        <h1 className="yellow">Who are we?</h1>
        <p>
        Food Yummy is an independent fast food restaurant chain that specializes in different type of yummy food making.
Established in 2011, Foodummy is growing to be the preferred food in Accra. We currently (as of November 2021) have 12 branches.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            In terms of our customer services, we treat  <span>with so much care</span>{" "}
            And we always welcome everyone with a free toasted bread
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Come and you will love it</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
              We provide quality yummy food.<span>Come and you will </span>{" "}
            love it
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
