import styled, { css } from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--color-white);
  border-bottom: 5px var(--color-purple) solid;
  color: var(--color-black);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const Container = styled.div`
  border: ${({ border = 'none' }) => border};
  border-left: ${({ borderLeft = 'none' }) => borderLeft};
  display: ${(display = 'block') => display};
  ${({
    display,
    direction = 'row',
    alignItems = 'flex-start',
    justify = 'flex-start',
  }) => {
    if (display === 'flex') {
      return css`
        align-items: ${alignItems};
        flex-direction: ${direction};
        flex-wrap: wrap;
        justify-content: ${justify};
      `;
    }
  }}
  height: ${({ height }) => height};
  margin: ${({ margin = 0 }) => margin};
  min-width: 150px;
  width: ${({ width }) => width};
  padding: ${({ padding = 0 }) => padding};
`;

export const H1Styled = styled.h1`
  font-size: 2.8rem;
`;

export const Paragraph = styled.p`
  color: ${({ color = 'black' }) => {
    return `var(--color-${color})`;
  }};
  display: ${({ display = 'block' }) => display};
  margin: ${({ margin = 0 }) => margin};
  padding: ${({ padding = 0 }) => padding};
`;

export const Img = styled.img`
  border: var(--color-purple) 1px solid;
  border-radius: 100%;
  width: 142px;
`;
