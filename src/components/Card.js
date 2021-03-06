import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */
const Card = props => {
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <Wrapper
      className={props.className}
      centered={props.centered}
      onClick={props.onClick}>
      <img src={props.Image} />
      <Image
        src={props.image}
        centered={props.centered}
        onLoad={() => setImageLoaded(true)}
        isLoaded={imageLoaded}
      />
      <TextWrapper centered={props.centered}>
        <Title>{props.title}</Title>
        {props.text && <Text>{props.text}</Text>}
        {props.children}
      </TextWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.object,
  className: PropTypes.string
};

Card.defaultProps = {
  title: 'Example'
};

export default Card;

const Wrapper = styled.div`
  max-width: 500px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);

  &:hover {
    box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
      rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
      rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
      rgba(35, 35, 35, 0.05) 0px 64px 64px;
    transform: translate(0, -4px);
  }

  &:hover img {
    box-shadow: rgba(45, 45, 45, 0.02) 0px 2px 2px,
      rgba(49, 49, 49, 0.02) 0px 4px 4px, rgba(42, 42, 42, 0.02) 0px 8px 8px,
      rgba(32, 32, 32, 0.02) 0px 16px 16px, rgba(49, 49, 49, 0.02) 0px 32px 32px,
      rgba(35, 35, 35, 0.02) 0px 64px 64px;
    transform: translate(0, -2px);
  }

  ___CSS_0___
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333333;
  margin: 15px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ___CSS_0___
`;

const Image = styled.img`
  display: block;
  width: calc(100% - 20px);
  margin: -30px auto 0px;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.1s;
  @media (min-width: 450px) {
    width: 60%;
  }

  ___CSS_0___

  ___CSS_1___
`;

const TextWrapper = styled.div`
  ___CSS_0___
`;

const Text = styled.p`
  margin: 10px 0;
  color: #2f4f4f;
`;
