
import {render, screen} from '@testing-library/react';
import Results from "@/components/Results";

it('render results', () => {
  const data = [{
    "id": "MLA407134",
    "picture": "http://http2.mlstatic.com/D_889352-MLA49798327311_042022-I.jpg",
    "title": "Taladro",
    "price": 299000,
    "free_shiping": true
  },
  {
    "id": "MLA407135",
    "picture": "http://http2.mlstatic.com/D_889352-MLA49798327311_042022-I.jpg",
    "title": "Taladro 2",
    "price": 299000,
    "free_shiping": false
  }]
  render(
    <Results results={data} />
  )
  expect(screen.getByText('Taladro'))
})

