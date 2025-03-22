export interface Product {
  name: string
  quantity: number
  unitPrice: number
}

export interface Buyer {
  name: string
  address: string
  phone: string
  email: string
}

export interface Transaction {
  id: string
  date: string
  buyer: Buyer
  products: Product[]
  paymentMethod: string
}

export const sampleTransactions: Transaction[] = [
  {
    id: "TRX-001",
    date: "2023-06-15",
    buyer: {
      name: "John Doe",
      address: "123 Main St, Anytown, AT 12345",
      phone: "(555) 123-4567",
      email: "john.doe@example.com",
    },
    products: [
      {
        name: "Premium Laptop",
        quantity: 1,
        unitPrice: 1299.99,
      },
      {
        name: "Wireless Mouse",
        quantity: 2,
        unitPrice: 29.99,
      },
      {
        name: "Laptop Sleeve",
        quantity: 1,
        unitPrice: 24.99,
      },
    ],
    paymentMethod: "Credit Card",
  },
  {
    id: "TRX-002",
    date: "2023-06-16",
    buyer: {
      name: "Jane Smith",
      address: "456 Oak Ave, Somewhere, SW 67890",
      phone: "(555) 987-6543",
      email: "jane.smith@example.com",
    },
    products: [
      {
        name: "Smartphone",
        quantity: 1,
        unitPrice: 899.99,
      },
      {
        name: "Phone Case",
        quantity: 1,
        unitPrice: 19.99,
      },
      {
        name: "Screen Protector",
        quantity: 2,
        unitPrice: 9.99,
      },
      {
        name: "Wireless Charger",
        quantity: 1,
        unitPrice: 34.99,
      },
    ],
    paymentMethod: "PayPal",
  },
  {
    id: "TRX-003",
    date: "2023-06-17",
    buyer: {
      name: "Robert Johnson",
      address: "789 Pine St, Elsewhere, EW 13579",
      phone: "(555) 246-8102",
      email: "robert.johnson@example.com",
    },
    products: [
      {
        name: "Smart TV",
        quantity: 1,
        unitPrice: 799.99,
      },
      {
        name: "HDMI Cable",
        quantity: 3,
        unitPrice: 12.99,
      },
      {
        name: "TV Wall Mount",
        quantity: 1,
        unitPrice: 49.99,
      },
    ],
    paymentMethod: "Cash",
  },
  {
    id: "TRX-004",
    date: "2023-06-18",
    buyer: {
      name: "Emily Davis",
      address: "321 Maple Rd, Nowhere, NW 97531",
      phone: "(555) 135-7924",
      email: "emily.davis@example.com",
    },
    products: [
      {
        name: "Wireless Headphones",
        quantity: 1,
        unitPrice: 199.99,
      },
      {
        name: "Bluetooth Speaker",
        quantity: 1,
        unitPrice: 89.99,
      },
      {
        name: "Power Bank",
        quantity: 2,
        unitPrice: 39.99,
      },
    ],
    paymentMethod: "UPI",
  },
]

