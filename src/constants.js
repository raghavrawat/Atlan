import customers from '@/data/customers.json'
import orders from '@/data/orders.json'

export const navigationItems = [
    { id: 1, title: 'Customers' },
    { id: 2, title: 'Products' }
]

export const QUERY_RESULT = {
    1: {
        queries: [
            {
                id: 1,
                query: "SELECT * FROM CUSTOMERS where country = 'Mexico'",
                data: customers.filter(customer => customer.country === 'Mexico')
            },
            {
                id: 2,
                query: "SELECT * FROM CUSTOMERS",
                data: customers
            }
        ]
    },
    2: {
        queries: [
            {
                id: 1,
                query: "SELECT * FROM PRODUCTS",
                data: orders
            },
        ]
    }
}