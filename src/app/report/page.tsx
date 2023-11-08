// import React from "react";

// //** Postgres */
// import { sql } from "@vercel/postgres";

// export default async function ReportPage({
//     params,
// }: {
//     params: { user: string };
// }): Promise<JSX.Element> {
//     const { rows } =
//         await sql`SELECT * from CARTS where user_id=${params.user}`;

//     return (
//         <div>
//             {rows.map(row => (
//                 <div key={row.id}>
//                     {row.id} - {row.quantity}
//                 </div>
//             ))}
//         </div>
//     );
// }

import React from "react";

export default function ReportPage() {
    return <div>page</div>;
}
