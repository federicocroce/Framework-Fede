import React from 'react';

import FilterableProductTable from './components/FilterableProductTable.js';

let db = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Footballl" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default class appTable extends React.Component {
    constructor() {
        super()
    }



    render() {
        
        return (
            <div>
                <FilterableProductTable store={db} />
            </div>
        )
    }
} 