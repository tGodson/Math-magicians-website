import React from 'react';
import renderer from 'react-test-renderer';
import Home from './components/Home';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
});