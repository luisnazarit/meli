import Breadcrumb from '@/components/Breadcrumb';
import {render, screen} from '@testing-library/react';

it('render breadcrumb', () => {

  const breadcrumb = [
    {
      "id": "MLA407134",
      "name": "Herramientas"
    },
    {
      "id": "MLA5228",
      "name": "Herramientas Eléctricas"
    },
    {
      "id": "MLA455276",
      "name": "Perforación"
    },
    {
      "id": "MLA437468",
      "name": "Taladros"
    },
    {
      "id": "MLA5232",
      "name": "De Mano"
    }
  ];

  render(
    <Breadcrumb breadcrumb={breadcrumb} />
  )
  expect(screen.getByText('De Mano'))
})

it('Breadcrumb without data', () => {

  const breadcrumb = [];

  const {container} = render(
    <Breadcrumb breadcrumb={breadcrumb} />
  )
  expect(container.getElementsByClassName('breadcrumb').length).toBe(0);
})


