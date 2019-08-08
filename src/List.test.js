import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const documents = [
    {
      "name": "company-test-document.pdf",
      "date": "2017-06-12T00:00:00.000Z"
    }, {
      "name": "dapibusetjusto et.pdf",
      "date": "2017-03-02T00:00:00.000Z"
    }, {
      "name": "Phasellus-id-pretium-ipsum.docx",
      "date": "2017-05-04T00:00:00.000Z"
    }, {
      "name": "Nullam-fringilla-eget-magna-at-venenatis.pdf",
      "date": "2017-08-07T00:00:00.000Z"
    }, {
      "name": "efficitur fermentum quam.pdf",
      "date": "2017-08-02T00:00:00.000Z"
    }];

  ReactDOM.render(<List documents={documents}/>, div);
});