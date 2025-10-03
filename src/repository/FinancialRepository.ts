import mysql, { Connection,RowDataPacket } from "mysql2/promise";
import { FinancialAsset } from "../model/FinancialAsset";
import dotenv from "dotenv";
dotenv.config();



export class FinancialRepository {

    private async connectWithDatabase(): Promise<Connection> {
    const host = process.env.HOSTDB;
    const user = process.env.USERBD;
    const password = process.env.PASSWORDBD;
    const database = process.env.DB;

    if (!host || !user || !password || !database) {
        throw new Error("Alguma variável de ambiente do banco não está definida!");
    }

    return mysql.createConnection({
        host,
        user,
        password,
        database,
    });

    }



//oque preciso modificar nesse save futuramente, preciso adicionar um check de se aquele valor do nome 
    async save(financialAsset: FinancialAsset): Promise<void> {
        const con = await this.connectWithDatabase();

        try {
            const sql = "INSERT INTO financial_asset(type, name, amount,quantity,ticker) VALUES (?,?,?,?,?)";
            const values = [financialAsset.type, financialAsset.name, financialAsset.amount,financialAsset.quanity,financialAsset.ticker];
            await con.execute(sql, values); 
        } catch (err) {
            console.error("Erro ao inserir registro:", err);
            throw err;
        } finally {
            await con.end();
        }
    }

     async getAllData(): Promise<any> {
        const con = await this.connectWithDatabase();
        try {
            const [rows] = await con.query<RowDataPacket[]>("SELECT * FROM financial_asset");
            return rows.map(row => ({
                type: row.type,
                name: row.name,
                value: row.amount, 
            }));
        } finally {
            await con.end();
        }
    }
}
