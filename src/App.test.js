import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import './setupTest';

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<App />, div);
// 	ReactDOM.unmountComponentAtNode(div);
// });

// describe('Examining the syntax of Jest Test', () => {
// 	it('sum numbers', () => {
// 		expect(1 + 2).toEqual(3);
// 		expect(1 + 2 + 6).toEqual(4);
// 	});
// });

describe('First React component test with Enzyme', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});
