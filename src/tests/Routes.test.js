import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Routes';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="/">Home</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="/calculator">App</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="/quote">Quote</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});