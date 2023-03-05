import React from "react";
import PropTypes from 'prop-types';
import { ButtonMore } from "./Button.styled";

export const Button = ({nextPage}) => {
    return (
            <ButtonMore type="button" onClick={() => nextPage()}>Load more</ButtonMore>
    )  
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};