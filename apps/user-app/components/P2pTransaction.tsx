import { Card } from "@repo/ui/card"

export const P2pTransaction = ({
    transactions
}: {
    transactions: {
        Date: Date,
        amount: number,
       
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Amount Debited">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Amount Debited">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Send INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.Date.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    - Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}