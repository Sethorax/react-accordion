# React Accordion [![npm version](https://badge.fury.io/js/%40sethorax%2Freact-accordion.svg)](https://badge.fury.io/js/%40sethorax%2Freact-accordion)

A simple React accordion component.

## Example

```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAccordion from '@sethorax/react-accordion';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            accordionData: [
                {
                    id: 1,
                    title: 'Entry 1',
                    content: '<div>Fancy html content</div>'
                },
                {
                    id: 2,
                    title: 'Entry 2',
                    content: '<div>Fancy html content</div>'
                }
            ]
        }
    }

    render() {
        return (
            <div className="my-app-contents">
                <h1>Accordion</h1>
                <ReactAccordion data={this.state.accordionData} multiple={false} collapsible={true} animation="300"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
```

## Props

Property            | Type   | Default        | Required | Description
:-------------------|:------:|:--------------:|:--------:|:----------------------------------------
data                | array  |                |    yes   | Array of accordion contents.
multiple            | bool   | false          |    no    | Allows multiple accordion entries to be open at the same time.
collapsible         | bool   | true           |    no    | If set to `false` the currently opened accordion entry cannot be closed.
animation           | number | 500            |    no    | Animation speed in milliseconds. If set to `0` animations are disabled completely.

## Licence

[MIT](LICENSE)