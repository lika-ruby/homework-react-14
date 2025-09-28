import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 4;
  transition: opacity 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export const ModalS = styled.div`
  
  position: absolute;
  top: 50%;
  left: 50%;

  z-index: 5;
  transition: 
    visibility 1000ms cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 0.5s cubic-bezier(0.25, 0.31, 0.17, 0.89);
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    
    &.hori {
        max-width: 1400px;
    }

    &.vert {
        max-height: 900px;
    }

`;
