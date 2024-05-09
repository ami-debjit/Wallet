import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { P2pTransaction } from "../../../components/P2pTransaction";



async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}
async function getp2pTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        Date: t.timestamp,
        amount: t.amount,
    }))
}

export default async function () {
    const transactions = await getOnRampTransactions();
    const balance = await getBalance();
    const p2pTransfer =await getp2pTransactions();
    return <div className="w-full ">
        <div>
            <BalanceCard amount={balance.amount} locked={balance.locked} />
        </div>
       
    </div>

}