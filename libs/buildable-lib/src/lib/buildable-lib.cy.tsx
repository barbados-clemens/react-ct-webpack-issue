import * as React from 'react';
import BuildableLib, { BuildableLibProps } from './buildable-lib';

describe(BuildableLib.name, () => {
  let props: BuildableLibProps;

  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    cy.mount(<BuildableLib {...props} />);
  });
});
