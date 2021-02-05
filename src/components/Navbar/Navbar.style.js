import styled from "styled-components";

import {
  FlexBoxStyle,
  CustomContainerStyle,
  CenteredLayoutStyle,
  CommonGridStyle,
} from "../../style/commonStyle";

export const NavbarStyle = styled.header`
  .navbar-belt {
    background: ${(props) => props.theme.color.lightGrayColor};

    padding: 1rem 0;

    .navbar-container {
      ${FlexBoxStyle};
      ${CustomContainerStyle};
      ${CenteredLayoutStyle};

      .phone-details {
        ${FlexBoxStyle};

        .phone-icon {
          margin-right: 2rem;

          > svg {
            width: 1rem;
            height: 1rem;
          }
        }

        .phone-no {
          font-size: ${(props) => props.theme.fontSize.p};
        }
      }

      .account-options-wrapper {
        ${FlexBoxStyle};

        list-style: none;

        .account-option {
          &:last-of-type {
            .account-link {
              border-right: none;
              padding: 0 0 0 2rem;
            }
          }

          .account-link {
            border-right: 0.1rem solid
              ${(props) => props.theme.color.blackColor};
            color: ${(props) => props.theme.color.blackColor};
            text-decoration: none;
            padding: 0 2rem;
          }
        }
      }
    }
  }
`;

export const MenubarStyle = styled.nav`
  ${CustomContainerStyle};
  ${CommonGridStyle};

  padding: 2rem 1.5rem;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakPoints.largeDevices}) {
    &:before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props) => props.theme.color.whiteColor};
      width: 50%;
      height: 100vh;
      z-index: 2;
    }

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props) => props.theme.color.blackColor};
      width: 100%;
      height: 100vh;
      z-index: 1;
      opacity: 0.5;
    }
  }

  .site-logo-wrapper {
    justify-self: center;

    .site-logo {
      width: 22.8rem;
      height: auto;
    }
  }
`;

export const SiteMenuStyle = styled.article`
  .menu-items-wrapper {
    display: flex;
    list-style: none;
    z-index: 3;

    @media (max-width: ${(props) => props.theme.breakPoints.largeDevices}) {
      position: absolute;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      text-align: left;
    }

    .menu-item {
      padding-right: 2rem;

      .menu-item-link {
        text-decoration: none;
        font-size: ${(props) => props.theme.fontSize.h5};
        font-family: ${(props) => props.theme.fontFamily.Playfair};
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
        color: ${(props) => props.theme.color.blackColor};
        font-style: italic;
      }
    }
  }
`;

export const SocialIconsMenuStyle = styled.section`
  ${FlexBoxStyle};

  justify-content: flex-end;

  .social-icon-wrapper {
    ${FlexBoxStyle};

    margin-right: 5rem;

    @media (max-width: ${(props) => props.theme.breakPoints.largeDevices}) {
      position: absolute;
      left: 2rem;
      bottom: 0;
      z-index: 3;
    }

    .social-icon {
      ${FlexBoxStyle};

      border: 0.2rem solid ${(props) => props.theme.color.primaryColor};
      padding: 1rem;
      border-radius: 50%;
      transition: 0.2s all linear;
      margin-right: 1rem;

      &:hover {
        background: ${(props) => props.theme.color.primaryColor};

        > svg {
          fill: ${(props) => props.theme.color.whiteColor};
        }
      }

      > svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${(props) => props.theme.color.primaryColor};
      }
    }
  }

  .currency-changer-wrapper {
    .ant-select {
      color: ${(props) => props.theme.color.whiteColor};

      &.ant-select-focused {
        box-shadow: unset;
      }

      .ant-select-selector {
        background: ${(props) => props.theme.color.blackColor};
        border: none;
      }

      .ant-select-arrow {
        color: ${(props) => props.theme.color.whiteColor};
      }
    }
  }
`;
