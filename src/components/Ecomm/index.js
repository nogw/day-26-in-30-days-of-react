import React, { useState } from 'react';
import { Container, Filter, Shop, Items, FilterItem, Item, Image, Description } from './styles';
import Data from './list'

function Ecomm() {
  const [Phones, setPhones] = useState(Data)
  const [Brand, setBrand] = useState('apple')

  const checkBrand = Phones.filter((Phones) => {
    if ( Brand === 'all' ) {
      return Phones
    }
    return Phones.brand === Brand
  })

  const handleChange = (el) => {
    setBrand(el)
  }

  return (
    <Container>
      <Filter>
        <form>
          <FilterItem onClick={() => handleChange('all')}>
            <h2>All</h2>
          </FilterItem>
          <FilterItem onClick={() => handleChange('apple')}>
            <h2>Apple</h2>
          </FilterItem>
          <FilterItem onClick={() => handleChange('samsung')}>
            <h2>Samsung</h2>
          </FilterItem>
          <FilterItem onClick={() => handleChange('xiaomi')}>
            <h2>Xiaomi</h2>
          </FilterItem>
        </form>
      </Filter>
      <Shop>
        <Items>
          {
            checkBrand.map((item) => {
              return (
                <Item key={item.id}>
                  <Image>
                    <img src={item.image} alt="mobile" />
                  </Image>
                  <Description>
                    <h2>{item.brand}</h2>
                    <h1>{item.name}</h1>
                    <h3>{item.value}</h3>
                    <button>BUY NOW</button>
                  </Description>      
                </Item>
              )
            })
          }
        </Items>
      </Shop>
    </Container>
  );
}

export default Ecomm;