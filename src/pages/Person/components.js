import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  color: white;
`;

const PersonInfo = styled.div`
  flex: 2;
  padding: 20px;

  a {
    text-decoration: none;
  }
`;

const PersonNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 50px;
  background: ${(props) => props.theme.backgroundTertiary};
  width: fit-content;
  clip-path: polygon(84% 0, 100% 100%, 13% 100%, 0 1%);

  p {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
  }

  @media (max-width: 746px) {
    padding: 10px 25px;
  }
`;

const PersonWallpaper = styled.div`
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 20% 100%);
  flex: 2;

  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 746px) {
    display: none;
  }
`;

const PersonHeader = styled.div`
  color: ${(props) => props.theme.fontSecondary};
  text-transform: uppercase;
  font-size: 30px;
  word-spacing: 2px;
  white-space: nowrap;

  @media (max-width: 746px) {
    font-size: 24px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const PersonBody = styled.div`
  padding: 20px;

  border-radius: 5px;
  font-size: 24px;

  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 10px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${(props) => props.theme.backgroundSecondary};
    border-radius: 5px;
    padding: 15px 30px;
    font-size: 18px;
    b {
      text-transform: uppercase;
      font-weight: 600;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: ${(props) => props.theme.fontSecondary};
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: minmax(150px, 1fr);
    > div {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;

const PersonConfirmation = styled.div`
  color: ${(props) => props.theme.fontPrimary};
  text-align: center;
`;

export {
  Wrapper,
  PersonHeader,
  PersonBody,
  PersonWallpaper,
  PersonInfo,
  PersonNav,
  PersonConfirmation,
};
