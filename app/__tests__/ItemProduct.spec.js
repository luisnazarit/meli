
import {render, screen} from '@testing-library/react';
import ItemProduct from "@/components/Results";

it('render component', () => {
  const data = {
    "id": "MLA407134",
    "picture": "http://http2.mlstatic.com/D_889352-MLA49798327311_042022-I.jpg",
    "title": "Taladro",
    "price": 299000,
    "free_shiping": true
  }

  render(
    <ItemProduct {...data} />
  )
  expect(screen.getByText('Taladro'))
})

it('render component', () => {
  const data = {
    "id": "MLA407134",
    "picture": "http://http2.mlstatic.com/D_889352-MLA49798327311_042022-I.jpg",
    "title": "Taladro",
    "price": 299000,
    "free_shiping": true
  }

  render(
    <ItemProduct {...data} />
  )
  expect(screen.getByText('Taladro'))
})