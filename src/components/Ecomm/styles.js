import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Shop = styled.div`
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  display: flex;
`;

export const Filter = styled.div`
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
  min-width: 220px;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
  padding: 5px;
`;

export const FilterItem = styled.div`
  display: flex;  
  align-items: center;
  background-color: #212121;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05), 0px 0px 25px 0px rgba(0,0,0,0.08);
  margin: 10px;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
  }
`
export const Item = styled.div`
  margin: auto auto;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05), 0px 0px 25px 0px rgba(0,0,0,0.08);
  width: 150px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
`;

export const Items = styled.div`
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
`

export const Image = styled.div`
  img {
    height: 90px;
    width: 80px;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  h1, h2, h3 {
    color: #212121;
  }

  button {
    background-color: #282b2f;
    margin: 10px;
    border: none;
    outline: none;
    padding: 5px 15px;
    color: #f1f1f1;
    font-weight: bold;
  }

  h1 {
    font-size: 15px;
  }

  h2 {
    font-size: 10px;
  }

  h3 {
    font-size: 10px;
  }
`;
