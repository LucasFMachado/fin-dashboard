import { TRANSACTIONS } from "./data";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-300 rounded-md h-26 p-4 flex flex-col gap-4 text-center">
          <p className="font-light">Deposit:</p>
          <p className="font-medium text-4xl text-green-700">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(20)}
          </p>
        </div>
        <div className="bg-slate-300 rounded-md h-26 p-4 flex flex-col gap-4 text-center">
          <p className="font-light">Withdraw:</p>
          <p className="font-medium text-4xl text-red-500">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(10)}
          </p>
        </div>
        <div className="bg-slate-300 rounded-md h-26 p-4 flex flex-col gap-4 text-center">
          <p className="font-light">Entries:</p>
          <p className="font-medium text-4xl text-blue-800">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(10)}
          </p>
        </div>
      </div>
      <div className="px-10">
        <table className="w-full rounded-md p-4">
          <thead>
            <tr>
              <th className="py-2 px-4">Título</th>
              <th className="py-2 px-4">Valor</th>
              {/* <th className="py-2 px-4">Categoria</th> */}
              <th className="py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((transaction) => (
              <tr key={transaction.id} className="border-t border-slate-800">
                <td className="py-2 px-4">{transaction.title}</td>
                <td className="py-2 px-4 flex items-center">
                  {transaction.type === "deposit" ? (
                    <span className="text-green-700 mr-4">
                      <AiOutlinePlusCircle size={25} />
                    </span>
                  ) : (
                    <span className="text-red-500 mr-4">
                      <AiOutlineMinusCircle size={25} />
                    </span>
                  )}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td className="text-center py-2 px-4">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
