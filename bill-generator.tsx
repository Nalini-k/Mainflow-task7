"use client"

import { useState, useRef } from "react"
import { Search, Printer, Download, Save } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BillPreview from "@/components/bill-preview"
import { type Transaction, sampleTransactions } from "@/lib/sample-data"

export default function BillGenerator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(sampleTransactions[0])
  const billRef = useRef<HTMLDivElement>(null)

  // Filter transactions based on search query
  const filteredTransactions = sampleTransactions.filter(
    (transaction) =>
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.buyer.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle print functionality
  // Replace the print and PDF export functions with simpler browser-based implementations
  // Update the handlePrint function to use window.print()
  const handlePrint = () => {
    window.print()
  }

  // Handle PDF export
  const handleExportPDF = () => {
    // In a real implementation, you would use a library like jspdf and html2canvas
    // For this demo, we'll just show an alert
    alert(`PDF of Bill-${selectedTransaction?.id || "preview"} would be exported here`)
    // In production, you would implement:
    // 1. Convert the bill to a canvas using html2canvas
    // 2. Convert the canvas to a PDF using jspdf
    // 3. Save the PDF file
  }

  // Handle save functionality (in a real app, this would save to a database)
  const handleSave = () => {
    alert("Bill saved successfully!")
    // In a real implementation, this would save the bill to a database
  }

  // Handle transaction selection
  const handleSelectTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Generate Bill</h2>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className={`p-3 rounded-md cursor-pointer transition-colors ${
                  selectedTransaction?.id === transaction.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
                onClick={() => handleSelectTransaction(transaction)}
              >
                <div className="font-medium">{transaction.buyer.name}</div>
                <div className="text-sm opacity-90">ID: {transaction.id}</div>
                <div className="text-sm opacity-90">Date: {transaction.date}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-4 space-y-4 no-print">
          <h2 className="text-xl font-bold">Actions</h2>
          <div className="grid grid-cols-1 gap-2">
            <Button onClick={handlePrint} className="w-full justify-start">
              <Printer className="mr-2 h-4 w-4" />
              Print Bill
            </Button>
            <Button onClick={handleExportPDF} className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Export as PDF
            </Button>
            <Button onClick={handleSave} className="w-full justify-start">
              <Save className="mr-2 h-4 w-4" />
              Save Bill
            </Button>
          </div>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <div ref={billRef} className="bg-white rounded-lg shadow-lg p-6 print-container">
          {selectedTransaction && <BillPreview transaction={selectedTransaction} />}
        </div>
      </div>
    </div>
  )
}

