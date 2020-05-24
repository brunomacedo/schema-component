import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LayoutWrapper = styled.section`
  display: flex;
`;

export const LayoutMain = styled.main`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #16202c;
  line-height: 1.6;
  color: #ffffff;
`;

export const Back = styled(Link)`
  display: inline-block;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
