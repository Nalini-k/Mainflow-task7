import type { Transaction } from "@/lib/sample-data"

interface BillPreviewProps {
  transaction: Transaction
}

export default function BillPreview({ transaction }: BillPreviewProps) {
  // Calculate subtotal
  const subtotal = transaction.products.reduce((sum, product) => sum + product.quantity * product.unitPrice, 0)

  return (
    <div className="space-y-6 print:text-black">
      {/* Company Header */}
      <div className="flex flex-col items-center text-center border-b pb-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
          <span className="text-primary-foreground text-xl font-bold">ACME</span>
        </div>
        <h1 className="text-2xl font-bold">ACME Corporation</h1>
        <p className="text-muted-foreground">123 Business Street, Commerce City, CC 12345</p>
        <p className="text-muted-foreground">Phone: (555) 123-4567 | Email: sales@acmecorp.com</p>
      </div>

      {/* Bill Title */}
      <div className="text-center">
        <h2 className="text-xl font-bold uppercase">Invoice</h2>
      </div>

      {/* Buyer Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-muted-foreground">Bill To:</h3>
          <p className="font-medium">{transaction.buyer.name}</p>
          <p>{transaction.buyer.address}</p>
          <p>Phone: {transaction.buyer.phone}</p>
          <p>Email: {transaction.buyer.email}</p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold text-muted-foreground">Transaction Details:</h3>
          <p>
            <span className="font-medium">Transaction ID:</span> {transaction.id}
          </p>
          <p>
            <span className="font-medium">Date:</span> {transaction.date}
          </p>
          <p>
            <span className="font-medium">Payment Method:</span> {transaction.paymentMethod}
          </p>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-2 text-left">Product Name</th>
              <th className="border p-2 text-center">Quantity</th>
              <th className="border p-2 text-right">Unit Price</th>
              <th className="border p-2 text-right">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {transaction.products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2 text-center">{product.quantity}</td>
                <td className="border p-2 text-right">${product.unitPrice.toFixed(2)}</td>
                <td className="border p-2 text-right">${(product.quantity * product.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2 font-medium">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t-2 border-primary font-bold text-lg">
            <span>Total Amount Due:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t pt-4 text-center text-sm text-muted-foreground">
        <p>Thank you for your business!</p>
      </div>
    </div>
  )
}

